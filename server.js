const PORT = 8000;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const fs = require("fs");
const multer = require("multer");
const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");
let filePath;

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    filePath = req.file.path;
    console.log(filePath);
  });
});

app.post("/vision", async (req, res) => {
  try {
    const imageAsBase64 = fs.readFileSync(filePath, "base64");
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: req.body.message },
            {
              type: "image_url",
              image_url: {
                url: `data:image/png;base64,${imageAsBase64}`,
              },
            },
          ],
        },
      ],
      store: true,
    });

    console.log(response.choices[0].message);
    res.send(response.choices[0].message);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));

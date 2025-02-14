import { useState } from "react";

const App = () => {
  const [image, setImage] = useState(null);
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const surpriseOptions = [
    "Does the image have a whale?",
    "Is the image fabulously pink?",
    "Does the image have puppies?",
  ];

  const surprise = () => {
    const randomValue =
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(randomValue);
  };

  const clear = () => {
    setImage(null);
    setValue("");
    setResponse("");
    setError("");
  };

  const uploadImage = async (e) => {
    setResponse("");
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setImage(e.target.files[0]);
    e.target.value = null;

    try {
      const options = {
        method: "POST",
        body: formData,
      };

      const response = await fetch("http://localhost:8000/upload", options);
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Something didn't work! Please try again!");
    }
  };

  const analyzeImage = async () => {
    setResponse("");
    if (!image) {
      setError("Please upload an image first!");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/vision", options);
      const data = await response.json();
      console.log(data);
      setResponse(data.content);
    } catch (error) {
      console.log(error);
      setError("Something didn't work! Please try again");
    }
  };

  return (
    <div className="app">
      <section className="search-section">
        <div className="image-container">
          {image && <img className="image" src={URL.createObjectURL(image)} />}
        </div>
        <p className="extra-info">
          <span>
            <label htmlFor="files" className="upload">
              {" "}
              upload an image{" "}
            </label>
            <input
              onChange={uploadImage}
              id="files"
              accept="image/*"
              type="file"
              hidden
            />
          </span>
          to ask questions about.
        </p>
        <p>
          What do you want to know about the image?
          <button className="surprise" onClick={surprise} disabled={response}>
            Surprise me
          </button>
        </p>
        <div className="input-container">
          <input
            value={value}
            placeholder="What is in the image..."
            onChange={(e) => setValue(e.target.value)}
          />
          {!response && !error && (
            <button onClick={analyzeImage}>Ask me</button>
          )}
          {(response || error) && <button onClick={clear}>Clear</button>}
        </div>
        {error && <p>{""}</p>}
        {response && <p className="answer">{response}</p>}
      </section>
    </div>
  );
};

export default App;

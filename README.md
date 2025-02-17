# OpenAI Vision App

OpenAI Vision App allows users to upload images and ask questions about the content in those images. 
The app uses OpenAI to analyze the images and generate meaningful responses to user queries. 
Whether you're wondering about objects in the image, colors, or even text recognition, this app provides insightful answers powered by AI. 
Built with `Reac`t for the frontend and `Express.js` for the backend, the app enables seamless interaction between the user and `OpenAI's` powerful model.

## How to Run the Application

Clone the Repository

`git clone https://github.com/karolinasniezek/react-openai-vision-app.git`

Install dependencies

`npm install`

Run the Application

`npm run start:frontent`
`npm run start:backend`

Visit the application at `http://localhost:3000` in your browser.
The backend is running at `http://localhost:8000`.

## Technologies Used
`React` The primary frontend library used for building dynamic user interfaces. React is responsible for managing the app's state and rendering content based on user interactions.
`Express.js` A minimal backend framework that handles server-side logic. It receives the uploaded images from the frontend and communicates with the `OpenAI API` to generate responses.
`OpenAI` The powerful AI model from OpenAI that analyzes images and generates meaningful answers to user questions.
`Multer` A middleware for handling multipart/form-data, used for uploading files in Express.js. Multer handles the image upload process on the server.

## How It Works

### Upload an Image

Users can upload an image.

### Ask a Question

The user can type a question related to the uploaded image.
The app sends the question and the image to the backend, which then forwards it to `OpenAI` for analysis.
`OpenAI` processes the image and the question, generating a response.

The `Surprise Me` button in this application adds an element of fun and interactivity by automatically generating a random question about the uploaded image.

### Response Generation

The app displays the response received from `OpenAI`.
If there is an error or no image is uploaded, the app will show an appropriate message.


https://github.com/user-attachments/assets/1ee6af87-c717-4d47-a27d-0b839504e360


## Key Features & Benefits

### Interactive and User-Friendly:

The app provides an interactive interface where users can easily upload images and ask questions. The use of `React` allows for a smooth and responsive user experience.

### AI-Powered Insights:

`OpenAI` provides answers that go beyond simple image recognition. It can analyze content and context within images, delivering insightful and intelligent responses.

### Real-Time Feedback:

With the help of `Express.js` and `OpenAI's` GPT model, the app generates real-time answers to user queries, enhancing the experience with fast and relevant responses.

### Easy Integration:

The app’s backend - `Express.js` is flexible and easy to integrate with other APIs and services.

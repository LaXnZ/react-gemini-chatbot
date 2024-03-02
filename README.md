# React Chatbot with Google Gemini AI

This is a React application that implements a basic chatbot using the Google Gemini AI API.

**Features:**

* Asks questions and receives responses from the Gemini AI model.
* Displays conversation history.
* Handles user input errors and provides informative messages.
* Includes a "Surprise me" button that asks random questions from a predefined list.

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system.
* A Google Gemini AI project and API key (**not included in this repository for security reasons**).

**Installation:**

1. Clone this repository.
2. Navigate to the project directory.
3. Install the dependency:

   ```bash
   npm install react
   ```

**Usage:**

1. Create a `.env` file in the project root directory.
2. In the `.env` file, add the following line, replacing `<YOUR_API_KEY>` with your actual Google Gemini API key:

   ```
   GOOGLE_GEN_AI_KEY=<YOUR_API_KEY>
   ```
3. **IMPORTANT:** **Do not commit the `.env` file to version control** (e.g., Git) to prevent exposing your API key.
4. Start the development server:

   ```bash
   npm start
   ```

5. Open http://localhost:3000 in your web browser.

**Deployment:**

1. Build the production-ready version:

   ```bash
   npm run build
   ```

2. Host the built files on a suitable platform (e.g., static website hosting, cloud platform).

**Contributing:**

We welcome contributions to this project! Please see the CONTRIBUTING.md file for more information.

**License:**

This project is licensed under the MIT License. See the LICENSE file for details.
```

Remember to follow the security guidelines:

* **Do not** share your Google Gemini API key publicly.
* Keep the API key in a secure `.env` file and **never** commit it to version control.
* Consider using environment variables or other secure key management practices in production environments.
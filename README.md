## AI Code Buddy

**What it does:**

AI Code Buddy is a React application under development that aims to be your helpful coding companion. It currently offers basic functionalities to enhance your development experience.

**Features:**

- **Syntax Highlighting:** Improves code readability with syntax highlighting provided by `prismjs`.
- **Markdown Rendering:** Enables the display of formatted text or instructions using `react-markdown`.

**Dependencies:**

- @google/generative-ai: "^0.2.1" (Google generative AI service)
- concurrently: "^8.2.2" (Runs multiple commands concurrently)
- cors: "^2.8.5" (Enables Cross-Origin Resource Sharing)
- dotenv: "^16.4.5" (Loads environment variables from a .env file)
- express: "^4.18.3" (Web framework for Node.js)
- nodemon: "^3.1.0" (Monitors changes in Node.js files and restarts the server)
- prismjs: "^1.29.0" (Provides syntax highlighting for code blocks)
- react-markdown: "^9.0.1" (Renders Markdown content in React applications)

**Installation:**

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and add your Google API key:

   ```
   GOOGLE_GEN_AI_KEY=<YOUR_API_KEY>
   ```

**Usage:**

1. Run both frontend and backend servers concurrently:

   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your web browser.

**Scripts:**

- `npm run dev`: Runs both frontend and backend servers concurrently.
- `npm start:frontend`: Starts the React frontend development server.
- `npm start:backend`: Starts the Node.js backend server.
- `npm run build`: Builds the production-ready version of the frontend.
- `npm run test`: Runs tests for the application.
- `npm run eject`: Ejects the React app for more customization (use with caution).

**Please note:** This documentation reflects the current state of the codebase and might not accurately represent future features or capabilities.

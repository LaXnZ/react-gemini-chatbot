import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const surpriseOptions = [
    "Who do you make BLT sandwich?",
    "What is the capital of France?",
    "What is the best programming language?",
    "When is National Cat",
  ];

  const surprise = () => {
    const randomValue = Math.floor(Math.random() * surpriseOptions.length);
    setValue(surpriseOptions[randomValue]);
  };

  const getResponse = async () => {
    if (!value) {
      setError("Please enter a question");
      return;
    }
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
      };
      const response = await fetch("http://localhost:8000/gemini", options);
      const data = await response.text();
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="app">
      <p>
        What do you want to know?
        <button className="surprise" onClick={surprise} disabled={!chatHistory}>
          Surprise me
        </button>
      </p>
      <div className="input-container">
        <input
          value={value}
          placeholder="When is Christmas...?"
          onChange={(e) => setValue(e.target.value)}
        />
        {!error && <button>Ask me</button>}
        {error && <button>Clear</button>}
      </div>
      {error && <p className="error">{error}</p>}
      <div className="search-result">
        <div key={""}>
          <p className="answer"></p>
        </div>
      </div>
    </div>
  );
};

export default App;

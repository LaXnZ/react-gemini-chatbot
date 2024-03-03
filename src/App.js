import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const textareaRef = useRef(null); // Create a ref for the textarea

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

  function autoResizeInput() {
    const input = document.getElementById("chat-input");
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
  }

  const getResponse = async () => {
    if (!value) {
      setError("Please enter a question");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/gemini", options);
      const data = await response.text();

      let formattedResponse = "";

      if (data.startsWith("**")) {
        // Bot's opinion on a topic
        formattedResponse = data;
      } else {
        // Regular response
        formattedResponse = `**Bot:** ${data}`;
      }

      // Format user message before adding to chat history
      const formattedUserMessage = `**You:** ${value}`;

      setChatHistory((oldChatHistory) => [
        ...oldChatHistory,
        {
          role: "user",
          parts: formattedUserMessage,
        },
        {
          role: "model",
          parts: formattedResponse,
        },
      ]);

      setValue("");
      setError("");
      textareaRef.current.style.height = "auto"; // Reset the height of the textarea
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
  };

  const clear = () => {
    setChatHistory([]);
    setValue("");
    setError("");
    textareaRef.current.style.height = "auto"; // Reset the height of the textarea
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
        <textarea
          ref={textareaRef}
          id="chat-input"
          value={value}
          placeholder="When is Christmas...?"
          onChange={(e) => {
            setValue(e.target.value);
            autoResizeInput();
          }}
        />

        {!error && <button onClick={getResponse}>Ask me</button>}
        {error && <button onClick={clear}>Clear</button>}
      </div>
      {error && <p className="error">{error}</p>}
      <div className="search-result">
        {chatHistory.map((chatItem, index) => (
          <div key={index}>
            <div className="message">
              {chatItem.role === "user" ? (
                <div className="user-message">
                  <ReactMarkdown>{chatItem.parts}</ReactMarkdown>
                </div>
              ) : (
                <div className="bot-message">
                  <ReactMarkdown>{chatItem.parts}</ReactMarkdown>
                </div>
              )}
            </div>
            {index !== chatHistory.length - 1 && (
              <div className="message-gap" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

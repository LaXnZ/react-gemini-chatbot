import { useState } from "react";

const App = () => {
  const [error, setError] = useState("");

  return (
    <div className="app">
      <p>
        What do you want to know?
        <button className="surprise">Surprise me</button>
      </p>
      <div className="input-container">
        <input value={""} placeholder="When is Christmas...?" onChange={""} />
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

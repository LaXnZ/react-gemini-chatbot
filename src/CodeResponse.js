import React, { useEffect } from "react";
import Prism from "prismjs";

const CodeResponse = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="language-javascript">
      <code>{code}</code>
    </pre>
  );
};

export default CodeResponse;

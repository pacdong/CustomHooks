import React from "react";
import useInput from "./customHooks/useInput";

function App() {
  const name = useInput("Mr.");
  return (
    <div>
      <input {...name} />
    </div>
  );
}

export default App;

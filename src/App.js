import React from "react";
import useInput from "./customHooks/useInput";

function App() {
  const name = useInput("Mr.");
  const email = useInput("@");
  return (
    <div>
      <input {...name} />
      <input {...email} />
    </div>
  );
}

export default App;

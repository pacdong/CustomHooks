import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e.taget);
  };
  return { value, setValue, onChange };
};

export default useInput;

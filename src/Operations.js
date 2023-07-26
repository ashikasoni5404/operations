import React, { useState } from "react";

const Operation = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "num1") {
      setNum1(Number(value));
    } else if (name === "num2") {
      setNum2(Number(value));
    }
  };

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

  const handleMultiplication = () => {
    setResult(num1 * num2);
  };

  const handleDivision = () => {
    setResult(num1 / num2);
  };

  return (
    <div>
      <h2>Arithmetic Operations</h2>
      <input
        className="input"
        placeholder="Enter num1"
        type="number"
        name="num1"
        value={num1}
        onChange={handleInputChange}
      />
      <input
        className="input"
        placeholder="Enter num2"
        type="number"
        name="num2"
        value={num2}
        onChange={handleInputChange}
      />
      <button className="button" onClick={handleAddition}>
        Add
      </button>
      <button className="button" onClick={handleSubtraction}>
        Subtract
      </button>
      <button className="button" onClick={handleMultiplication}>
        Multiply
      </button>
      <button className="button" onClick={handleDivision}>
        Divide
      </button>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default Operation;

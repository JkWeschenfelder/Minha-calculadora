import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input));
    } catch {
      setInput("Erro");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/"].map((char) => (
          <button key={char} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
        {["4", "5", "6", "*"].map((char) => (
          <button key={char} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
        {["1", "2", "3", "-"].map((char) => (
          <button key={char} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
        {["1/x", "x²", "√", "÷"].map((char) => (
          <button
            key={char}
            onClick={() => handleClick(char === "÷" ? "/" : char)}
          >
            {char}
          </button>
        ))}
        {["7", "8", "9", "×"].map((char) => (
          <button
            key={char}
            onClick={() => handleClick(char === "×" ? "*" : char)}
          >
            {char}
          </button>
        ))}
        {["4", "5", "6", "-"].map((char) => (
          <button key={char} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
        {["1", "2", "3", "+"].map((char) => (
          <button key={char} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
        {["0", ".", "=", "C"].map((char) => (
          <button
            key={char}
            onClick={
              char === "="
                ? handleCalculate
                : char === "C"
                ? handleClear
                : () => handleClick(char)
            }
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

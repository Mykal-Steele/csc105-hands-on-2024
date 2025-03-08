import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State management with more descriptive names
  const [total, setTotal] = useState(0);
  const [currentValue, setCurrentValue] = useState();
  const [lastOperation, setLastOperation] = useState("");

  // to handle invalid results
  useEffect(() => {
    if (isNaN(total) || !isFinite(total)) {
      setTotal(0);
    }
  }, [total]);

  const handleInputChange = (e) => {
    const inputVal = e.target.value.trim();
    setCurrentValue(inputVal === "" ? undefined : parseFloat(inputVal));
  };

  const performCalculation = (operationType) => {
    if (currentValue === undefined) return;

    setLastOperation(operationType);

    switch (operationType) {
      case "add":
        setTotal((prevTotal) => prevTotal + currentValue);
        break;
      case "subtract":
        setTotal((prevTotal) => prevTotal - currentValue);
        break;
      case "multiply":
        setTotal((prevTotal) => prevTotal * currentValue);
        break;
      case "divide":
        if (currentValue === 0) {
          alert("Cannot divide by zero");
          return;
        }
        setTotal((prevTotal) => prevTotal / currentValue);
        break;
      default:
        break;
    }
  };

  const clearInputField = () => {
    setCurrentValue(0);
    const inputElement = document.querySelector("input");
    if (inputElement) inputElement.value = "";
  };

  const clearResult = () => {
    setTotal(0);
    setLastOperation("");
  };

  return (
    <>
      <div className="card">
        <h1>Simple Calculator</h1>
        <div className="res">Result: {total}</div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="number"
            onChange={handleInputChange}
            placeholder="Enter a number"
          />
          <div className="button-row">
            <button
              type="button"
              className="Add"
              onClick={() => performCalculation("add")}
            >
              Add
            </button>
            <button
              type="button"
              className="Subtract"
              onClick={() => performCalculation("subtract")}
            >
              Subtract
            </button>
            <button
              type="button"
              className="Multiply"
              onClick={() => performCalculation("multiply")}
            >
              Multiply
            </button>
            <button
              type="button"
              className="Divide"
              onClick={() => performCalculation("divide")}
            >
              Divide
            </button>
          </div>
          <div className="button-row">
            <button
              type="button"
              className="Reset_Input"
              onClick={clearInputField}
            >
              Reset Input
            </button>
            <button
              type="button"
              className="Reset_Result"
              onClick={clearResult}
            >
              Reset Result
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;

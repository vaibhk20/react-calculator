import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import ClearDisplay from "../components/ClearDisplay";
import uniqid from "uniqid";
import buttons from "../data/data";
import Display from "../components/Display";
const Wrapper = () => {
    const [current, setCurrent] = useState("");
    const [previous, setPrevious] = useState("");
    const [operation, setOperation] = useState("");
  
    const handleEvaluation = (e) => {
      const value = e.target.value;
      if (value === "." && current.includes(".")) return;
      setCurrent(current.concat(e.target.value));
    };
  
    const chooseOperator = (e) => {
      const operator = e.target.value;
      if (operator === "=") {
        equalHandler();
      } else {
        operatorHandler(operator);
      }
    };
  
    const operatorHandler = (val) => {
      if (current === "") return;
      setOperation(val);
      if (previous !== "") {
        let result = calculate();
        setPrevious(result);
      } else {
        setPrevious(current);
      }
      setCurrent("");
    };
  
    useEffect(() => {
      console.log({ current, previous, operation });
    }, [current, previous, operation]);
  
    const equalHandler = () => {
      // console.log("EqualHanlder is being called");
      let value = calculate();
      console.log(value);
      if (value === undefined || value == null) return;
      setCurrent(value);
      setPrevious("");
      setOperation("");
    };
  
    const handleDisplay = (e) => {
      const value = e.target.value;
      if (value === "CE") {
        setCurrent("");
        setPrevious("");
        setOperation("");
      }
      if (value === "DEL") {
        if(current===""){
            setOperation("");
            setCurrent(previous);
            setPrevious("");
        }
        else{
            setCurrent(current.slice(0, -1)); // Or -1

        }
      }
    };
  
    const calculate = () => {
      // console.log("Calculate is being called")
      let result;
      let previousNumber = parseFloat(previous);
      let currentNumber = parseFloat(current);
      if (isNaN(previousNumber) || isNaN(currentNumber)) return;
      switch (operation) {
        case "÷":
          result = previousNumber / currentNumber;
          break;
        case "*":
          result = previousNumber * currentNumber;
          break;
        case "+":
          result = previousNumber + currentNumber;
          break;
        case "-":
          result = previousNumber - currentNumber;
          break;
        default:
          return;
      }
      return result.toString();
    };
  
    return (
      <div className="grid justify-center content-center p-32 bg-blue-200">
        <Display current={current} operation={operation} previous={previous}/>
        <ClearDisplay handleDisplay={handleDisplay} />
        <div className="grid grid-cols-4 gap-1 w-100 flex justify-center content-center">
          {buttons.map((btn) => {
            return btn.type === "number" ? (
              <Button
                value={btn.label}
                key={uniqid()}
                handleEvaluation={handleEvaluation}
              />
            ) : (
              <Button value={btn.label} key={uniqid()} handleEvaluation={chooseOperator} />
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Wrapper;
  
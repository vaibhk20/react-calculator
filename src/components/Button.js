import React from "react";

const Button = (props) => {

  return (
    <button
      className="bg-gradient-to-b from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 font-bold py-6 px-8 rounded text-white text-3xl drop-shadow-lg"
      onClick={props.handleEvaluation}
      value={props.value}
    >
      {props.value}
    </button>
  );
};

export default Button;

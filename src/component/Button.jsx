import React from "react";
import { useState } from "react";

const Button = ({ currencyConvert, result, from, to, amount, setAmount }) => {
  const [amountDisplay, setAmountDisplay] = useState();

  return (
    <div className="w-full">
      <button
        className="border w-full bg-blue-900"
        onClick={() => {
          setAmountDisplay(amount);
          currencyConvert();
          setAmount("");
        }}
      >
        convert
      </button>
      {console.log(from, to)}
      {result !== null && (
        <h2 className="my-px">
          Result: {amountDisplay} {from} = {result} {to}
        </h2>
      )}
    </div>
  );
};

export default Button;

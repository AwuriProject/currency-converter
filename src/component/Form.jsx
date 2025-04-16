import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { RiExchangeDollarLine } from "react-icons/ri";

const Form = () => {
  const [amount, setAmount] = useState();

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("NGN");
  const [result, setResult] = useState(null);

  const currencyConvert = async function () {
    try {
      const res = await fetch(
        `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}&access_key=058e7883274236be4b6845437924ed06`
      );
      const data = await res.json();
      console.log(data);
      setResult(data.result);
    } catch (error) {
      console.error("Consersion Error:", error);
      setResult(error);
    }
    setAmount.value = "";
  };
  return (
    <div className="form flex flex-col gap-8">
      <div className="input-group flex items-align w-full justify-between">
        <div className="input-wrap">
          <input
            type="text"
            className="input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <label className="placeholder">Amount</label>
        </div>
        <RiExchangeDollarLine color="#666666" fontSize={35} />
      </div>
      <Dropdown from={from} to={to} setFrom={setFrom} setTo={setTo} />
      <Button
        currencyConvert={currencyConvert}
        result={result}
        amount={amount}
        setAmount={setAmount}
        from={from}
        to={to}
      />
    </div>
  );
};

export default Form;

import React, { useState, useEffect } from "react";

const LearnHooks = (props) => {
  const [amount, setAmount] = useState(0);
  const [step, setStep] = useState(5);
  const handleStep = ({ target: { value } }) => {
    setStep(Number(value));
  };
  useEffect(() => {
    console.log("effect");
    const handleClick = () => {
      setAmount((prevAmount) => prevAmount + step);
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      console.log("clear effect");
      document.body.removeEventListener("click", handleClick);
    };
  }, [step]);

  useEffect(() => {
    if (Math.random() > 0.5) {
      //effect
      return () => {
        //cleanup
      };
    }
  }, []);

  return (
    <div style={{ backgroundColor: "pink" }}>
      <p>amount click: {amount}</p>
      <p>
        <input value={step} onChange={handleStep} />
      </p>
    </div>
  );
};
//onClick={handleClick}
export default LearnHooks;

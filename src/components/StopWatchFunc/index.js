import React, { useState, useEffect } from "react";
import { format, addMilliseconds } from "date-fns";
import styles from "./StopWatchFunc.module.scss";

const StopWatchFunc = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunnig, setIsRunnig] = useState(false);
  const handleBtn = () => {
    setIsRunnig(!isRunnig);
  };
  const handleBtnReset = ()=>{
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
    setIsRunnig(false)
  }
  useEffect(() => {
    console.log('effect')
    if (isRunnig) {
      const intervalId = setInterval(() => {
        console.log('setInterval')
        setTime((prevTime) => addMilliseconds(prevTime, 1000));
      }, 1000);
      return () => {
        console.log('clear effect')
        clearInterval(intervalId);
      };
    }
  }, [isRunnig]);
  return (
    <div className={styles.container}>
      <h2>{format(time, 'HH:mm:ss')}</h2>
      <button onClick={handleBtn}>{isRunnig ? "stop" : "start"}</button>
      <button onClick={handleBtnReset}>reset</button>
    </div>
  );
};

export default StopWatchFunc;

import React from "react";
import { useState } from "react";

const ExpenceTracker = () => {
  let [totalBalance, setBalance] = useState(0);
  const [addbalance, setAddBalance] = useState(0);
  const [total, setTotal] = useState(0);

  const [totalExpense, setTotalExpence] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleBalanceInput = (e) => {
    setAddBalance(parseInt(e.target.value));
  };

  const addBalance = () => {
    let temp = totalBalance + addbalance;
    setBalance(temp);
  };

  const handleExpenseInput = (e) => {
    setTotalExpence(e.target.value);
  };
  // const total{

  //     let temp=totalBalance-totalExpense;
  //     setTotal(temp);
  // }
  return (
    <>
      <h1>ExpenceTracker</h1>
      <h3>
        Balance : {totalBalance}
        <input type="number" onChange={handleBalanceInput}></input>
        <button onClick={addBalance}>Add</button>
      </h3>
      <h3>
        Expense : <input type="number" onChange={handleExpenseInput}></input>
      </h3>
      <h3>Total : {total} </h3>
    </>
  );
};
export default ExpenceTracker;

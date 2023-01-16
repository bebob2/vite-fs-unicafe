import React from "react";

export const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return <p>No Feedback given!!!</p>;
  }
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p>Total: {total}</p>
      <p>average : {((good + bad * -1) / total).toFixed(2)}</p>
      <p>positive : {((good / total) * 100).toFixed(2)}%</p>
    </div>
  );
};

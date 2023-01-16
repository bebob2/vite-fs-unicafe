import React from "react";

export const Statistics = (props) => {
  if (props.total === 0) {
    return <p>No Feedback given!!!</p>;
  }
  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>

      <p>Total: {props.total}</p>
      <p>
        average :{" "}
        {props.total === 0
          ? "Nicht verfuegbar"
          : (props.good + props.bad * -1) / props.total}
      </p>
      <p>
        positive :
        {props.total === 0
          ? "Nicht verfuegbar"
          : `${(props.good / props.total) * 100}%`}
      </p>
    </div>
  );
};

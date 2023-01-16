import React from "react";
import { StatisticLine } from "./statistic-line";

export const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return <p>No Feedback given!!!</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />

        <StatisticLine text="Total" value={total} />
        <StatisticLine
          text="average"
          value={((good + bad * -1) / total).toFixed(2)}
        />
        <StatisticLine
          text="positive"
          value={`${((good / total) * 100).toFixed(2)}%`}
        />
      </tbody>
    </table>
  );
};

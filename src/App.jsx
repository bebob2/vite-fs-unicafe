import { useState } from "react";
import { Statistics } from "./components/statistics";
import { StatisticLine } from "./components/statistic-line";
import { Button } from "./components/button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const getTotal = () => good + neutral + bad;

  return (
    <div>
      <h1>Feedback</h1>

      <Button onClick={() => setGood(good + 1)}>Good</Button>
      <Button onClick={() => setNeutral(neutral + 1)} children="Neutral" />
      <Button onClick={() => setBad(bad + 1)}>Bad</Button>

      <h1>Stats</h1>

      <Statistics good={good} neutral={neutral} bad={bad} total={getTotal()} />
    </div>
  );
};

export default App;

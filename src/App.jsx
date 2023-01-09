import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const getTotal = () => good + neutral + bad


  return (
    <div>
      <h1>Feedback</h1>

      <button onClick={()=> setGood(good+1)}>Good</button>
      <button onClick={()=>setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={()=>setBad(bad+1)}>Bad</button>

      <h1>Stats</h1>

      <p>Good :  {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>

      <p>Total:{getTotal()}</p>
      <p>average : {getTotal()===0?  'Nicht verfuegbar': (good + bad*(-1)) / getTotal()}</p>
      <p>positive :{getTotal()===0?  'Nicht verfuegbar':`${good / getTotal() *100}%` }</p>
    </div>
  )
}

export default App
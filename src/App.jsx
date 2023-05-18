import { useState } from 'react'
import { nanoid } from 'nanoid'

// eslint-disable-next-line react/prop-types
const Die = ({ value, isHeld, holdDice }) => {
  
  const styled = {
    backgroundColor: isHeld ? '#59E391' : '',
    borderRadius: isHeld ? 0.4 + 'rem' : '',
  }

  return (
    <img onClick={holdDice} style={styled} src={`/images/dice-${value}.png`} className="die" />
  )
}

const generateNewDice = () => {
  const newDice = [];
  for (let i = 0; i < 10; i++) {
    const obj = { 
      value: Math.floor((Math.random() * 6) + 1), 
      isHeld: false,
      id: nanoid()
    };
    
    newDice.push(obj)
  }
  return newDice
}

const App = () => {
  const [dice, setDice] = useState(generateNewDice())

  const holdDice = (id) => {
    setDice(prevDice => 
      prevDice.map(die => (
        die.id === id 
          ? { ...die, isHeld: !die.isHeld } 
          : die
      )
    )
    )
  }

  const diceElements = dice.map(die => 
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  )

  const rollDice = () => {
    setDice(generateNewDice())
  }


  return (
    <main>
    <h2>Tenzies</h2>
    <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className="container">
      {diceElements}
    </div>
    <button onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App

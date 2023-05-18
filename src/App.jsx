import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from './components/Die'

// eslint-disable-next-line react/prop-types

const generateNewDie = () => ({
  value: Math.floor((Math.random() * 6) + 1), 
  isHeld: false,
  id: nanoid()
})

const allNewDice = () => {
  const newDice = [];
  for (let i = 0; i < 10; i++) {
    newDice.push(generateNewDie())
  }
  return newDice
}

const App = () => {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allDiceHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])

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
    if (tenzies) {
      setDice(allNewDice())
      setTenzies(false)
      return
    }
    setDice(prevDice => 
      prevDice.map(die =>
       die.isHeld ? die : generateNewDie()
      ) 
    )
  }

  const buttonText = tenzies ? 'New Game' : 'Roll';

  return (
    <main>
    {tenzies && <Confetti />}
    <h1>Tenzies</h1>
    <p>Roll until all dice are the same. Click each die to freeze 
    it at its current value between rolls.</p>
    <div className="container">
      {diceElements}
    </div>
    <button onClick={rollDice}>{buttonText}</button>
    </main>
  )
}

export default App

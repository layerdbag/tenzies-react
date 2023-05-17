// import { useState } from 'react'



// eslint-disable-next-line react/prop-types
const Die = ({ random }) => {
  // const selected = {
  //   backgroundColor: '#59E391',
  //   borderRadius: '0.4rem',
  //   border: '2px solid rebeccapurple',
  // } 

  return (
    <img src={`/images/dice-${random}.png`} />
  )
}

const App = () => {
  const generateRandom = () => Math.floor((Math.random() * 6) + 1);

  return (
    <main>
    <h2>Tenzies</h2>
    <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className="container">
    <Die random={generateRandom()} />
    <Die random={generateRandom()} />
    <Die random={generateRandom()} />
    <Die random={generateRandom()} />
    <Die random={generateRandom()} />
    <Die random={generateRandom()} />
    <Die random={generateRandom()} />
    <Die random={generateRandom()} />
    <Die random={generateRandom()} />
    <Die random={generateRandom()} />
    </div>
    <button>Roll</button>
    </main>
  )
}

export default App

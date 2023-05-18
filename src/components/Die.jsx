/* eslint-disable react/prop-types */


function Die({ value, isHeld, holdDice }) {

  const styled = {
    backgroundColor: isHeld ? '#59E391' : '',
    borderRadius: isHeld ? 0.5 + 'rem' : '',
  }

  return (
    <img onClick={holdDice} style={styled} src={`../images/dice-${value}.png`} className="die" alt='die' />
  )
}


export default Die
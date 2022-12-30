import React from 'react'
import Confetti from 'react-confetti'
import '../CSS/confetti.css';

export default () => {
  return (
    <Confetti id='hideMeAfter5Seconds' numberOfPieces='700'/>
  )
}
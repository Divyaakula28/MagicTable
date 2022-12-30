import React from 'react'
import Confetti from 'react-confetti'
import '../CSS/confetti.css';

export default () => {
  const width= window.innerWidth;
  const height=window.innerHeight;
  return (
    <Confetti id='hideMeAfter5Seconds' width={width}
    height={height} numberOfPieces='700'/>
  )
}
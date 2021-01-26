import React, { useState } from 'react';
import './Game.css';
import { Board } from './Board/Board';
import ResultModal from './ResultModal/ResultModal';
import { calculateWinner } from '../utils/WinnerCalculator';

export const Game = () => {
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const winningCombination = [];

    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const onCellClicked = (cellIndex) => {
      if (isCellEmpty(cellIndex)) {
        const newCellValues = [...cellValues];
        newCellValues[cellIndex] = xIsNext ? 'X' : 'O';
        // Calculate the result
        
        const calcResult = calculateWinner(newCellValues, cellIndex);
        
        setCellValues(newCellValues);
        setXIsNext(!xIsNext);
        setIsGameOver(calcResult.hasResult);
      }
      
  }

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board cellValues={cellValues} 
          winningCombination={winningCombination}
          cellClicked={onCellClicked}
        />
    </div>
    <ResultModal 
      isGameOver={isGameOver}
    />
  </>
  );
}


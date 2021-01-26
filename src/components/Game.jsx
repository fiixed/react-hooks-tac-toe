import React, { useState } from 'react';
import './Game.css';
import { Board } from './Board/Board';
import ResultModal from './ResultModal/ResultModal';

export const Game = () => {
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [xIsNext, setXIsNext] = useState(true);
    const winningCombination = [];

    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const onCellClicked = (cellIndex) => {
      if (isCellEmpty(cellIndex)) {
        const newCellValues = [...cellValues];
        newCellValues[cellIndex] = xIsNext ? 'X' : 'O';
        setCellValues(newCellValues);
        setXIsNext(!xIsNext);
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
    <ResultModal />
  </>
  );
}


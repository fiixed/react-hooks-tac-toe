import React, { useState } from 'react';
import './Game.css';
import { Board } from './Board/Board';
import ResultModal from './ResultModal/ResultModal';
import { calculateWinner } from '../utils/WinnerCalculator';

const initCellValues = ['', '', '', '', '', '', '', '', ''];
const initXIsNext = true;
const initIsGameOver = false;
const initNumberOfTurnsLeft = 9;
const initWinningCombination = [];

export const Game = () => {
    const [cellValues, setCellValues] = useState(initCellValues);
    const [xIsNext, setXIsNext] = useState(initXIsNext);
    const [isGameOver, setIsGameOver] = useState(initIsGameOver);
    const [numberOfTurnsLeft, setNumberOfTurnsLeft] = useState(initNumberOfTurnsLeft);
    const [winner, setWinner] = useState();
    const [winningCombination, setWinningCombination] = useState(initWinningCombination);

    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const restartGame = () => {
        setCellValues(initCellValues);
        setXIsNext(initXIsNext);
        setIsGameOver(initIsGameOver);
        setNumberOfTurnsLeft(initNumberOfTurnsLeft);
        setWinner();
        setWinningCombination(initWinningCombination);
    };

    const onCellClicked = (cellIndex) => {
      if (isCellEmpty(cellIndex)) {
        const newCellValues = [...cellValues];
        newCellValues[cellIndex] = xIsNext ? 'X' : 'O';
        
        const newNumberOfTurnsLeft = numberOfTurnsLeft - 1;

        // Calculate the result
        const calcResult = calculateWinner(newCellValues, newNumberOfTurnsLeft,  cellIndex);
        
        setCellValues(newCellValues);
        setXIsNext(!xIsNext);
        setIsGameOver(calcResult.hasResult);
        setNumberOfTurnsLeft(newNumberOfTurnsLeft);
        setWinner(calcResult.winner);
        setWinningCombination(calcResult.winningCombination);
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
      winner={winner}
      onNewGameClicked={restartGame}
    />
  </>
  );
}


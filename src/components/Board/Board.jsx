
import { Cell } from '../Cell/Cell'
import './Board.css'

export const Board = () => {
    const cellValues = ['X', 'X', 'X', 'O', 'O', 'X', 'O', '', ''];
    const winningCombination = [0, 1, 2];
    const cells = cellValues.map((value, index) => {
        const canHighlight = winningCombination && 
                            winningCombination.indexOf(index) >= 0;

        return <Cell 
                key={index} 
                value={value} 
                canHighlight={canHighlight}/>
    });
    return (
        <>
        <div id="board">
            {cells}
        </div>
    </>
    )
}

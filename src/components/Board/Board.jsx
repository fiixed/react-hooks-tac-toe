
import { Cell } from '../Cell/Cell'
import './Board.css'

export const Board = () => {
    return (
        <>
        <div id="board">
            <Cell value="X" canHighlight={true}/>
            <Cell value="X" canHighlight={true}/>
            <Cell value="X" canHighlight={true}/>
            <Cell value="X" canHighlight={false}/>
            <Cell value="X" canHighlight={false}/>
            <Cell value="X" canHighlight={false}/>
            <Cell value="X" canHighlight={false}/>
            <Cell value="X" canHighlight={false}/>
            <Cell value="X" canHighlight={false}/>
        </div>
    </>
    )
}

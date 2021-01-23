import { Cell } from '../Cell/Cell'
import './Board.css'

export const Board = () => {
    return (
        <>
        <div id="board">
            <Cell value="X"/>
            <Cell value="X"/>
            <Cell value="O"/>
            <Cell value="X"/>
            <Cell value="O"/>
            <Cell value="X"/>
            <Cell value="O"/>
            <Cell value="X"/>
            <Cell value="X"/> 
        </div>
    </>
    )
}

import { VALUES } from './constants.js'

function Player({ moveHandler, playerMove }) {
    return VALUES.map(value => (
        <button key={value} disabled={playerMove !== null} onClick={() => moveHandler(value)}>{value}</button>
    ))
}

export default Player;
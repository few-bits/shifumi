import { VALUES, MODE_RESULTS } from '../../constants'
import styles from './choose.module.css'

function Player({ moveHandler, playerMove, mode }) {
    const disabled = mode === MODE_RESULTS;

    return (
        <div className={styles.chooseWrapper}>
            {VALUES.map(value => (
                <div
                    className={`${styles.choose} ${styles[value]} ${disabled ? styles.disabled : ''}`}
                    key={value}
                    title={value}
                    onClick={() => !disabled && moveHandler(value)}
                />
            ))}
        </div>
    )
}

export default Player;
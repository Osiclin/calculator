import styles from '../styles/Button.module.css'

export default function Button({ dispatch, state }) {
    return(
        <div className={styles.buttons}>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: 7} })}>7</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: 8} })}>8</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: 9} })}>9</button>
            <button className={styles.func} style={{backgroundColor: 'red'}} onClick={() => dispatch({ type: 'reset' })}>AC</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: 4} })}>4</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: 5} })}>5</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: 6} })}>6</button>
            <button className={styles.func} onClick={() => dispatch({ type: 'arg', payload: {arg: state.arg == '' ? '' : '/'} })}>/</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: 1} })}>1</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: 2} })}>2</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: 3} })}>3</button>
            <button className={styles.func} onClick={() => dispatch({ type: 'arg', payload: {arg: state.arg == '' ? '' : '*'} })}>x</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: '00'} })}>00</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: 0} })}>0</button>
            <button className={styles.num} onClick={() => dispatch({ type: 'arg', payload: {arg: '.'} })}>.</button>
            <button className={styles.func} onClick={() => dispatch({ type: 'arg', payload: {arg: state.arg == '' ? '' : '-'} })}>-</button>            
            <button className={styles.equals} onClick={() => dispatch({ type: 'total'})}>=</button>
            <button className={styles.func} onClick={() => dispatch({ type: 'arg', payload: {arg: state.arg == '' ? '' : '+'} })}>+</button>
        </div>
    )
}
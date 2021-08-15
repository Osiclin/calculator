import styles from '../styles/Display.module.css'

export default function Display({result, arg}) {
    return(
        <div className={styles.display}>
            <p>{result}</p>
            <p>{arg}</p>
        </div>
    )
}
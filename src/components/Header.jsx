import styles from './Header.module.css';
import todologo from '../assets/todologo.svg'

export function Header (){
    return(
        <header className={styles.header}>
            <img src={todologo} alt="" />
        </header>
    )
}
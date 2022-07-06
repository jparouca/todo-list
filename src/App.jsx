import './global.css'
import { Header } from './components/Header.jsx'
import styles from './App.module.css'
import plus from './assets/plus.svg'
export function App () {
  return (

    <div>
      <Header />

      <div className="wrapper">

        <form action="" className={styles.taskForm}>
          <textarea
            placeholder='Add a new Task'
            required
          />
          <button type='submit'>
            Add
            <img src={plus} alt="" />
          </button>
        </form>

    </div>

    </div>
  )
}
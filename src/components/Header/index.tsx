import todoLogo from '../../assets/logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="logotipo do ToDo list" />
    </header>
  )
}
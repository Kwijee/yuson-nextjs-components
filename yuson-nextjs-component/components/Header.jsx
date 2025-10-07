import styles from './Header.module.css';

export default function Header({ name = 'Kwi Jung Han Yuson' }) {
  return (
    <header className={styles.header}>
      <h1><u>My Profile</u></h1>
      <p className={styles.subtitle}>{name}</p>
    </header>
  );
}


import { memo } from 'react';
import styles from './Header.module.css';

export const Header = function Header({ notesCount }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.text}>Заметки</span>
      </h1>
      <div className={styles.notesCount}>
        Всего заметок: <span id="notesCount">{notesCount}</span>
      </div>
    </header>
  );
};

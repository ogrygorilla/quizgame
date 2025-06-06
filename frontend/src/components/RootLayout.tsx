import { Outlet } from "react-router";
import styles from "./RootLayout.module.scss";

function RootLayout() {
  return (
    <div className={styles.rootLayout}>
      <header className={styles.header}>
        <h1>Flashcard App</h1>
      </header>
      <main className={styles.main}>
        <button
          className={styles.button}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          To Homepage
        </button>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 Flashcard App</p>
      </footer>
    </div>
  );
}
export default RootLayout;

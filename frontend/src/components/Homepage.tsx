import styles from "./Homepage.module.scss";

function HomePage() {
  return (
    <div>
      <button
        className={styles.button}
        onClick={() => {``
          window.location.href = "/start-quiz";
        }}
      >
        Start Quiz
      </button>{" "}
      <button
        className={styles.button}
        onClick={() => {
          window.location.href = "/add-flashcard";
        }}
      >
        Add Flashcard
      </button>
    </div>
  );
}

export default HomePage;

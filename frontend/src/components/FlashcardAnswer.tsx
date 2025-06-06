import styles from "./Quiz.module.scss";

function FlashcardAnswer({
  answerText,
}: {
  answerText: string;
  isCorrect?: boolean;
}) {
  return (
    <div className={styles.quiz}>
      <p>{answerText}</p>
      <input
        type="radio"
        className={styles.checkbox}
        onChange={(event) => {
          console.log("On change event answerText input:", event);
        }}
        value={answerText}
      />
    </div>
  );
}

export default FlashcardAnswer;

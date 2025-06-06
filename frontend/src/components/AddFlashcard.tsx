import styles from "./AddFlashcard.module.scss";

function AddFlashcard() {
  return (
    <div>
      <h2>Add Flashcard</h2>
      <form
        className={styles.form}
        onSubmit={async (event: any) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const question = formData.get("question");
          const rightAnswer = formData.get("rightAnswer");
          const wrongAnswer1 = formData.get("wrongAnswer1");
          const wrongAnswer2 = formData.get("wrongAnswer2");
          const wrongAnswer3 = formData.get("wrongAnswer3");
          console.log({
            question,
            rightAnswer,
            wrongAnswer1,
            wrongAnswer2,
            wrongAnswer3,
          });
          const response = await fetch("http://localhost:4000/flashcards", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              question,
              rightAnswer,
              wrongAnswers: [wrongAnswer1, wrongAnswer2, wrongAnswer3],
            }),
          });
          console.log("Response from server:", response);
        }}
      >
        <div className={styles.formGroup}>
          <label htmlFor="question">Question:</label>
          <input type="text" id="question" name="question" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="rightAnswer">Right Answer:</label>
          <input type="text" id="rightAnswer" name="rightAnswer" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="wrongAnswer1">Wrong Answer:</label>
          <input type="text" id="wrongAnswer1" name="wrongAnswer1" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="wrongAnswer">Wrong Answer:</label>
          <input type="text" id="wrongAnswer2" name="wrongAnswer2" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="wrongAnswer">Wrong Answer:</label>
          <input type="text" id="wrongAnswer3" name="wrongAnswer3" required />
        </div>
        <button type="submit" className={styles.button}>
          Add Flashcard
        </button>
      </form>
    </div>
  );
}

export default AddFlashcard;

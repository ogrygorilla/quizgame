import React from "react";
import styles from "./Quiz.module.scss";
import FlashcardAnswer from "./FlashcardAnswer";
import { useLoaderData } from "react-router";

export type FlashcardType = {
  question: string;
  rightAnswer: string;
  wrongAnswers: string[];
};

const QUIZ_LIMIT = 5;

function Quiz() {
  const flashcards = useLoaderData() as FlashcardType[];
  console.log("Flashcards loaded:", flashcards);
  //shuffle flashcards order
  const shuffledFlashcards: FlashcardType[] = flashcards.sort(
    () => Math.random() - 0.5
  );

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = React.useState(0);
  // const [currentFlashcard, setCurrentFlashcard] = React.useState<FlashcardType>(
  //   shuffledFlashcards[currentFlashcardIndex]
  // );

  //
  return (
    <div className={styles.quiz}>
      <h2 className={styles.title}>Quiz</h2>
      {/* {flashcards.map((flashcard: FlashcardType, index: number) => ( */}
      <div key={currentFlashcardIndex} className={styles.flashcard}>
        <p className={styles.question}>
          {shuffledFlashcards[currentFlashcardIndex].question}
        </p>
        <div className={styles.answers}>
          <FlashcardAnswer
            answerText={shuffledFlashcards[currentFlashcardIndex].rightAnswer}
            isCorrect={true}
          />
        </div>
        {shuffledFlashcards[currentFlashcardIndex].wrongAnswers.map(
          (wrongAnswer: string, index: number) => (
            <FlashcardAnswer
              key={index}
              answerText={wrongAnswer}
              isCorrect={false}
            />
          )
        )}
        <button
          className={styles.button}
          onClick={() => {
            console.log(
              "Submit answer for flashcard:",
              shuffledFlashcards[currentFlashcardIndex].question
            );
            if (currentFlashcardIndex >= QUIZ_LIMIT - 1) {
              console.log("Quiz completed!");
            } else {
              setCurrentFlashcardIndex(currentFlashcardIndex + 1);
            }
          }}
        >
          Submit Answer
        </button>
      </div>
      {/* ))} */}
    </div>
  );
}

export default Quiz;

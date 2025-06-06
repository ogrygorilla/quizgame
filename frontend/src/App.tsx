import { createBrowserRouter, RouterProvider } from "react-router";
import AddFlashcard from "./components/AddFlashcard";
import HomePage from "./components/Homepage";
import Quiz from "./components/Quiz";
import RootLayout from "./components/RootLayout";

const mockQuizQuestions = [
  {
    question: "What is the capital of France?",
    rightAnswer: "Paris",
    wrongAnswers: ["London", "Berlin", "Madrid"],
  },
  {
    question: "What is the largest planet in our solar system?",
    rightAnswer: "Jupiter",
    wrongAnswers: ["Earth", "Mars", "Saturn"],
  },
  //more flashcards can be added here
  {
    question: "What is the chemical symbol for water?",
    rightAnswer: "H2O",
    wrongAnswers: ["CO2", "O2", "NaCl"],
  },
  {
    question: "What is the smallest prime number?",
    rightAnswer: "2",
    wrongAnswers: ["1", "3", "4"],
  },
  {
    question: "What is the capital of Japan?",
    rightAnswer: "Tokyo",
    wrongAnswers: ["Seoul", "Beijing", "Bangkok"],
  },
  {
    question: "What is the largest mammal?",
    rightAnswer: "Blue Whale",
    wrongAnswers: ["Elephant", "Giraffe", "Great White Shark"],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    rightAnswer: "Diamond",
    wrongAnswers: ["Gold", "Iron", "Platinum"],
  },
];

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/add-fLashcard",
          element: <AddFlashcard />,
        },
        {
          path: "/start-quiz",
          element: <Quiz />,
          loader: async () => {
            const response = await fetch("http://localhost:4000/flashcards", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
            const storedQuizQuestions = await response.json();
            console.log("Response from server:", storedQuizQuestions);
            return [...storedQuizQuestions, ...mockQuizQuestions];
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

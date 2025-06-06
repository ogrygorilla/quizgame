export class CreateFlashcardDto {
  question: string;
  rightAnswer: string;
  wrongAnswers: string[];

  constructor(question: string, rightAnswer: string, wrongAnswers: string[]) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswers = wrongAnswers;
  }
}

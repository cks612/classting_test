export interface elementType {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  selectors: string[];
  type: string;
}

export interface Props {
  isCorrect: boolean;
  resultStyle: string;
  disabled: boolean;
}

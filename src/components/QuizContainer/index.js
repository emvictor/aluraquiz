import { QuizContainer } from "./styles.js";

export default function Container({ children, ...props }) {
  return <QuizContainer {...props}>{children}</QuizContainer>;
}

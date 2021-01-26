import QuizBackground from "./styles.js";

export default function Background({ children, ...props }) {
  return <QuizBackground {...props}>{children}</QuizBackground>;
}

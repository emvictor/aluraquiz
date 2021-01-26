import { BackgroundImage, QuizContainer, Widget } from "./styles";
import Footer from ".././Footer";
// import Background from ".././QuizBackground";
export default function backgroundImage() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>QUIZ</h1>
          </Widget.Header>
          <Widget.Content>
            <p> lorem ipsum dolor sit amet</p>
          </Widget.Content>
        </Widget>
        <Widget></Widget>
        <Widget>
          <h1>Quiz da Galera</h1>
          <p>lorem ipsum dolor sit amet</p>
        </Widget>
      </QuizContainer>
      <Footer />
    </BackgroundImage>
  );
}

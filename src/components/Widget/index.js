import { Widget, Header, Content } from "./styles.js";

export default function WidgetRender({ children, ...props }) {
  return <Widget {...props}>{children}</Widget>;
}

WidgetRender.Header = function WidgetHeader({ children, ...props }) {
  return <Header {...props}>{children}</Header>;
};

WidgetRender.Content = function WidgetContent({ children, ...props }) {
  return <Content {...props}>{children}</Content>;
};

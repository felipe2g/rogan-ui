import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Container } from "../../index";

test("Renders", async () => {
  const { getByText } = render(<Container>Hello world</Container>);
  expect(getByText("Hello world")).toBeTruthy();
});
test("has padding based on prop", async () => {
  const { getByTestId } = render(<Container padding={24}>Hello world</Container>);
  expect(getByTestId("container")).toHaveStyle('padding: 1.5rem');
});
test("has padding left and right based on prop", async () => {
  const { getByTestId } = render(
    <Container paddingLeft={24} paddingRight={24}>
      Hello world
    </Container>
  );
  expect(getByTestId("container")).toHaveStyle("padding-left: 1.5rem; padding-left: 1.5rem");
});
test("has background and color changed by prop", async () => {
  const { getByTestId } = render(
    <Container backgroundColor="#333" color="white">
      Hello world
    </Container>
  );
  expect(getByTestId("container")).toHaveStyle("background-color: #333; color: white")
});
test("has width and height changed by prop", async () => {
  const { getByTestId } = render(
    <Container width="100%" height="200px">
      Hello world
    </Container>
  );
  expect(getByTestId("container")).toHaveStyle("width: 100%; height: 200px");
});
test("has box-shadow added by prop", async () => {
  const { getByTestId } = render(<Container boxShadow={true}>Hello world</Container>);
  expect(getByTestId("container")).toHaveStyle("box-shadow: -2px 5px 15px -2px #999;");
});
test("has font family by prop", async () => {
  const { getByTestId } = render(<Container fontFamily="tahoma">Hello world</Container>);
  expect(getByTestId("container")).toHaveStyle("font-family: tahoma");
});
test("has width and height changed by prop", async () => {
  const { getByTestId } = render(<Container fontFamily="tahoma">Hello world</Container>);
  expect(getByTestId("container")).toHaveStyle("font-family: tahoma");
});
test("it aligns centrally based on center prop", async () => {
  const { getByTestId } = render(<Container center>Hello world</Container>);
  expect(getByTestId("container")).toHaveStyle("display: flex; justify-content: center; align-items: center;");
});
test("it aligns horizontally based on center prop", async () => {
  const { getByTestId } = render(<Container centerHorizontal>Hello world</Container>);
  expect(getByTestId("container")).toHaveStyle("display: flex; justify-content: center;");
});
test("it sets border radius based on prop", async () => {
  const { getByTestId } = render(<Container borderRadius={10}>Hello world</Container>);
  expect(getByTestId("container")).toHaveStyle("border-radius: 10px");
});
test("it sets border based on prop", async () => {
  const { getByTestId } = render(<Container border="small">Hello world</Container>);
  expect(getByTestId("container")).toHaveStyle("border: solid 1px");
});
test("it sets border radius and color based on prop", async () => {
  const { getByTestId } = render(<Container borderRadius={10} borderColor="red">Hello world</Container>);
  expect(getByTestId("container")).toHaveStyle("border-radius: 10px; border-color: red");
});


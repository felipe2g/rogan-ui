import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UIHeader } from "../../index";

test("Renders", async () => {
  const { getByText } = render(<UIHeader>Hello world</UIHeader>);
  expect(getByText("Hello world")).toBeTruthy();
});

test("Renders as the correct H tag", async () => {
  const { container } = render(<UIHeader level={1}>Hello world</UIHeader>);
  expect(container.querySelector("h1")).toBeTruthy();
});

test("changes the styles based on props", async () => {
  const { getByTestId } = render(<UIHeader color="red" fontWeight={700} fontFamily="tahoma" fontSize={32} italic>Hello world</UIHeader>);
  expect(getByTestId("headerContent")).toHaveStyle(
    "color: red; font-weight: 700; font-family: tahoma; font-size: 2rem; font-style: italic;"
  );
});
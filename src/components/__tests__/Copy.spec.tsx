import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Copy } from "../../index";

test("Renders", async () => {
  const { getByText } = render(<Copy>Test text</Copy>);
  expect(getByText("Test text")).toBeTruthy();
});

test("changes the styles based on props", async () => {
  const { getByTestId } = render(
    <Copy color="red" fontWeight={700} fontFamily="tahoma" fontSize={32} italic>
      Hello world
    </Copy>
  );
  expect(getByTestId("copyContent")).toHaveStyle(
    "color: red; font-weight: 700; font-family: tahoma; font-size: 2rem; font-style: italic;"
  );
});
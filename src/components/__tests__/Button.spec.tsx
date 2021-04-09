import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "../../index";

const props = {
  borderRadius: 5,
  background: "green",
  fontSize: 36,
  padding: "10px",
};

const style = "border-radius: 5px; background: green; font-size: 2.25rem; padding: 10px";

test("Renders", async () => {
  const { getByRole } = render(<Button text="John" />);
  expect(getByRole("button")).toHaveTextContent("John");
});

test("adds style based on props", () => {
  const { getByTestId } = render(<Button {...props} />);
  expect(getByTestId("button")).toHaveStyle(style);
});

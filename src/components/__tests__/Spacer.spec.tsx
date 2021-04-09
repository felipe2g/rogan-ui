import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Spacer } from "../../index";

test("Renders", async () => {
  const { getByTestId } = render(<Spacer height={24} />);
  expect(getByTestId("spacer")).toBeDefined();
});

test("Has the correct margin based on height prop", async () => {
  const { getByTestId } = render(<Spacer height={24} />);
  expect(getByTestId("spacer")).toHaveStyle("margin-bottom: 24px");
});

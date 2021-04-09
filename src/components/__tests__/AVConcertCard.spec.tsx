import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AVConcertCard } from "../../index";

test("Renders", async () => {
const { getByText } = render(
<AVConcertCard text="Hello world" />);
expect(getByText("Hello world")).toBeTruthy();
});
import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GridContainer } from "../../index";

test("Renders", async () => {
    const { getByText } = render(
        <GridContainer>Hello world</GridContainer>);
    expect(getByText("Hello world")).toBeTruthy();
});
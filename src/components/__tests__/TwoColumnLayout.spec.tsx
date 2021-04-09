import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TwoColumnLayout } from "../../index";

test("Renders", async () => {
    const { getByText } = render(
        <TwoColumnLayout leftFlexBasis={50} rightFlexBasis={50} children={<p>Hello World</p>} />);
    expect(getByText("Hello world")).toBeTruthy();
});
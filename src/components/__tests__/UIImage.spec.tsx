import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UIImage } from "../../index";

test("Renders", async () => {
    const { getByText } = render(
        <UIImage url="http://www.fillmurray.com/g/200/300" />);
    expect(getByText("Hello world")).toBeTruthy();
});
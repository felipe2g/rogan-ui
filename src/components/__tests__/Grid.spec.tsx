import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Grid } from "../../index";

const SampleGrid = () => (
  <Grid wrap={true} columns={4} mobileColumns={2}>
    <p>Content 1</p>
    <p>Content 2</p>
    <p>Content 3</p>
  </Grid>
)

test("Renders three children", async () => {
  const { getByText } = render(<SampleGrid />);
  expect(getByText("Content 1")).toBeTruthy();
  expect(getByText("Content 2")).toBeTruthy();
  expect(getByText("Content 3")).toBeTruthy();
});

test("Changes flex basis based on column size", async () => {
  const {getByTestId, getAllByTestId} = render(<SampleGrid />);
  expect(getByTestId("grid")).toHaveStyle("flex-wrap: wrap");
  expect(getAllByTestId("gridColumn")[0]).toHaveStyle("flex-basis: 50%");
});

test("returns null if no children", async () => {
  const { container } = render(<Grid children={null} />);
  expect(container.firstChild).toBeNull();
});

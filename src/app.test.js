/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Search from "./components/search/search";
describe("testing App render", () => {
  it("renders correctly", () => {
    render(<App />);
  });
});

describe("testing Search render", () => {
  it("renders correctly", () => {
    render(<Search />);
  });
});

describe("testing disabled button", () => {
  it("button working correct", () => {
    render(<Search />);

    expect(screen.getByRole("button")).toBeDisabled();
  });
});

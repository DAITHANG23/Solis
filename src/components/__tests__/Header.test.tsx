import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";

// Mock Toggles component để kiểm tra mà không cần test logic bên trong nó
// eslint-disable-next-line react/display-name
jest.mock("../Header/Toggle", () => () => (
  <div data-testid="toggles-mock">Toggles Component</div>
));

describe("HeaderWithToggles", () => {
  it("renders the header title", () => {
    render(<Header />);
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  it("renders the Toggles component", () => {
    render(<Header />);
    expect(screen.getByTestId("toggles-mock")).toBeInTheDocument();
  });

  it("has correct wrapper class", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass("not-prose");
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: "count is 0" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByRole("button", { name: "count is 1" })).toBeInTheDocument();
});
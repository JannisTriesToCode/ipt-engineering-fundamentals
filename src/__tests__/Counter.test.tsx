import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

test("requires three extra clicks to move past three and shows a gif", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: "count is 0" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    fireEvent.click(screen.getByRole("button", { name: "count is 1" }));
    fireEvent.click(screen.getByRole("button", { name: "count is 2" }));

    expect(screen.getByRole("button", { name: "count is 3" })).toBeInTheDocument();
    expect(screen.getByText("Three is sticky. Click 3 more times to move on.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "count is 3" }));
    expect(screen.getByText("Three is sticky. Click 2 more times to move on.")).toBeInTheDocument();
    expect(screen.queryByAltText("Funny celebration gif")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "count is 3" }));
    expect(screen.getByText("Three is sticky. Click 1 more time to move on.")).toBeInTheDocument();
    expect(screen.queryByAltText("Funny celebration gif")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "count is 3" }));

    expect(screen.getByRole("button", { name: "count is 4" })).toBeInTheDocument();
    expect(screen.getByAltText("Funny celebration gif")).toBeInTheDocument();
    expect(screen.queryByText(/Three is sticky/)).not.toBeInTheDocument();
});
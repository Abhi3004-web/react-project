import Sum from "./Sum";
import { render, screen } from "@testing-library/react";

test('Sum of two values: ', () => {
    render(<Sum a={5} b={10} />);
    expect(screen.getByText("15")).toBeInTheDocument();
})

test('Sum of two values2w: ', () => {
    render(<Sum a={15} b={20} />);
    expect(screen.getByText("35")).toBeInTheDocument();
})

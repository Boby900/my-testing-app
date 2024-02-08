import { render, screen } from '@testing-library/react'
import { Header } from '../todo/components/header';
import demo from '../todo/components/demo';

test("Header renders successfully", () => {
    render(<demo/>);

    const element = screen.getByText(/demo/i);

    expect(element).toBeInTheDocument();
})
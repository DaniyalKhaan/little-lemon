import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Submit Button is present in the form', () => {
    render(<BookingForm />);
    const sumbitButton = screen.getByText("Make Your reservation");
    expect(sumbitButton).toBeInTheDocument();
})
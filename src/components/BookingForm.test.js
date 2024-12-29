import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm"; // Adjust path as needed

test("should have required attributes on form fields", () => {
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
  
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("required");

  const timeSelect = screen.getByLabelText("Choose time");
  expect(timeSelect).toHaveAttribute("required");

  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toHaveAttribute("required");

  const occasionSelect = screen.getByLabelText("Occasion");
  expect(occasionSelect).toHaveAttribute("required");
});





describe("Guest field validation", () => {
    test("should return an error for guests less than 1", () => {
      expect(validateGuests(0)).toBe("Number of guests must be between 1 and 10.");
    });
  
    test("should return an error for guests greater than 10", () => {
      expect(validateGuests(11)).toBe("Number of guests must be between 1 and 10.");
    });
  
    test("should not return an error for guests between 1 and 10", () => {
      expect(validateGuests(5)).toBe("");
    });
  });



  //TEST FOR FORM SUBMISSION

  
  test("should call submitForm on valid form submission", () => {
    const mockSubmitForm = jest.fn();
    const mockDispatch = jest.fn();
  
    render(<BookingForm availableTimes={["12:00 PM"]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
    fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: "2024-12-31" } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: "12:00 PM" } });
    fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: "5" } });
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: "Birthday" } });
  
    fireEvent.click(screen.getByText("Make Your reservation"));
  
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2024-12-31",
      time: "12:00 PM",
      guests: "5",
      occasion: "Birthday",
    });
  });
  

import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (field, value) => {
    let error = "";
    switch (field) {
      case "date":
        if (!value) error = "Date is required.";
        break;
      case "time":
        if (!value) error = "Time is required.";
        break;
      case "guests":
        if (!value || value < 1 || value > 10)
          error = "Number of Guests should be between 1 and 10.";
        break;
      case "occasion":
        if (!value) error = "Occasion is required.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleFieldChange = (field, value) => {
    switch (field) {
      case "date":
        setDate(value);
        dispatch({ type: "UPDATE_TIMES", payload: value });
        break;
      case "time":
        setTime(value);
        break;
      case "guests":
        setGuests(value);
        break;
      case "occasion":
        setOccasion(value);
        break;
      default:
        break;
    }

    setTouchedFields((prev) => ({ ...prev, [field]: true }));

    const error = validateField(field, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));

    validateForm({ ...errors, [field]: error });
  };

  const handleFieldBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));

    const value = field === "date" ? date : field === "time" ? time : field === "guests" ? guests : occasion;
    const error = validateField(field, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));

    validateForm();
  };

  const validateForm = (updatedErrors = errors) => {
    setIsFormValid(Object.values(updatedErrors).every((error) => !error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      date: validateField("date", date),
      time: validateField("time", time),
      guests: validateField("guests", guests),
      occasion: validateField("occasion", occasion),
    };

    setErrors(newErrors);
    setTouchedFields({
      date: true,
      time: true,
      guests: true,
      occasion: true,
    });

    if (Object.values(newErrors).every((error) => !error)) {
      const formData = {
        date,
        time,
        guests,
        occasion,
      };
      submitForm(formData);
      console.log(formData);

      setDate("");
      setTime("");
      setGuests("");
      setOccasion("");
      setErrors({});
      setTouchedFields({});
      setIsFormValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='card-title' htmlFor="res-date">Choose date</label>
      <input
        className='highlight-text'
        type="date"
        id="res-date"
        required
        value={date}
        onChange={(e) => handleFieldChange("date", e.target.value)}
        onBlur={() => handleFieldBlur("date")}
      />
      {touchedFields.date && errors.date && <span className='paragraph'>{errors.date}</span>}

      <label className='card-title' htmlFor="res-time">Choose time</label>
      <select
        className='highlight-text'
        required
        value={time}
        onChange={(e) => handleFieldChange("time", e.target.value)}
        onBlur={() => handleFieldBlur("time")}
        id="res-time"
      >
        <option value="">Select Time</option>
        {availableTimes?.length > 0 ? (
          availableTimes.map((t, index) => (
            <option key={index} value={t}>{t}</option>
          ))
        ) : (
          <option disabled>No Time Available</option>
        )}
      </select>
      {touchedFields.time && errors.time && <span className='paragraph'>{errors.time}</span>}

      <label className='card-title' htmlFor="guests">Number of guests</label>
      <input
        className='highlight-text'
        type="number"
        min="1"
        max="10"
        placeholder='1'
        id="guests"
        required
        value={guests}
        onChange={(e) => handleFieldChange("guests", e.target.value)}
        onBlur={() => handleFieldBlur("guests")}
      />
      {touchedFields.guests && errors.guests && <span className='paragraph'>{errors.guests}</span>}

      <label className='card-title' htmlFor="occasion">Occasion</label>
      <select
        className='highlight-text'
        required
        value={occasion}
        onChange={(e) => handleFieldChange("occasion", e.target.value)}
        onBlur={() => handleFieldBlur("occasion")}
        id="occasion"
      >
        <option value="">Select an Occasion</option>
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>
      {touchedFields.occasion && errors.occasion && <span className='paragraph'>{errors.occasion}</span>}

      <input
        className='btn btn-fill highlight-text'
        aria-label='Submit Form'
        type="submit"
        disabled={!isFormValid}
        value="Make Your reservation"
      />
    </form>
  );
}

export default BookingForm;

import React, { useState } from 'react'

function BookingForm({availableTimes=["If array is missing"], dispatch}) {

    const [date, setDate] = useState("I am Date");
    const [time , setTime ] = useState("I am Time");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Occasion");


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion
        }
        console.log(formData);
        alert("Reservataion SUbmitted");
    }

    return (
       <form
       onSubmit={handleSubmit}
       style={{display:'grid', maxWidth: '200px', gap:'0px', backgroundColor:'red'}}
       >
  
       <label htmlFor="res-date">Choose date</label>
       <input type="date" id="res-date" 
       value={date} 
       onChange={(e) => 
       {setDate(e.target.value);
        dispatch({type: 'UPDATE_TIMES', payload: {date: e.target.value}})
       }}/>
  
       <label htmlFor="res-time">Choose time</label>
       <select
       value={time}
       onChange={(e) => setTime(e.target.value)}
       id="res-time">
        {availableTimes.map((t, index) => (
            <option key={index} value={t}>{t}</option>
        ))}

      </select>
  
      <label htmlFor="guests">Number of guests</label>
      <input type="number" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
  
      <label htmlFor="occasion">Occasion</label>
      <select
      value={occasion}
      onChange={(e) => setOccasion(e.target.value)}
      id="occasion">
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>
  
      <input type="submit" value="Make Your reservation" />
  
      </form>
    )
    }



export default BookingForm;
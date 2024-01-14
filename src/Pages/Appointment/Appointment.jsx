import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const Appointment = () => {
  // State variables for form values
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5001/users', {
        fullName: fullName,
        phone: phone,
        date: date,
        time: time,
      });

      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Appointment booked successfully!',
        text: 'You will receive a confirmation shortly.',
      });

      // Do something with the form values, for example, send them to the server
      console.log({
        fullName,
        phone,
        date,
        time,
      });

      // Clear the form fields if needed
      setFullName("");
      setPhone("");
      setDate("");
      setTime("");
    } catch (error) {
      // Handle error if the axios request fails
      console.error('Error submitting form:', error);

      // Show error message using SweetAlert
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong! Please try again.",
        icon: "error",
      });
    }
  }

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">Request Appointment</h2>
      <p className="text-center fs-5">
        Make sure to make an appointment before visiting our clinic
      </p>
      <div className="container">

        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label htmlFor="date">Preferred Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <label htmlFor="time">Preferred Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />

            <button class="pushable">
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front">
              book Appointment
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

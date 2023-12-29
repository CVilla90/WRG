import React, { useState } from 'react';
import './App.css';
import WorkoutForm from './WorkoutForm';
import DisplayWorkout from './DisplayWorkout';  // Import the new component

function App() {
  const [workout, setWorkout] = useState(null);  // State to store the workout data

  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData);  // Add this line to debug
    fetch('/api/generate-workout', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      setWorkout(data);  // Update the workout state with the received data
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="App">
      <h1>Workout Routine Generator</h1>
      <WorkoutForm onSubmit={handleFormSubmit} />
      {workout && <DisplayWorkout workout={workout} />}  {/* Display the workout */}
    </div>
  );
}

export default App;

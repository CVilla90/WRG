import React, { useState } from 'react';
import './WorkoutForm.css';

function WorkoutForm({ onSubmit }) {
  const [muscleGroup, setMuscleGroup] = useState('');
  const [numberOfExercises, setNumberOfExercises] = useState(1);
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ muscleGroup, numberOfExercises, sets, reps });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Muscle Group:</label>
          <select className="form-input" value={muscleGroup} onChange={(e) => setMuscleGroup(e.target.value)}>
          <option value="">Select a Muscle Group</option>
          <option value="back">Back</option>
          <option value="chest">Chest</option>
          <option value="legs">Legs</option>
          <option value="shoulders">Shoulders</option>
          <option value="biceps">Biceps</option>
          <option value="triceps">Triceps</option>
          <option value="abs">Abs</option>
          <option value="fullBody">Full Body</option>
        </select>
        </div>

        <div className="form-group">
      <label>Number of Exercises:</label>
      <input className="form-input" type="number" value={numberOfExercises} onChange={(e) => setNumberOfExercises(e.target.value)} min="1" />
    </div>
    
    <div className="form-group">
      <label>Sets:</label>
        <input className="form-input" type="number" value={sets} onChange={(e) => setSets(e.target.value)} min="1" />
        </div>

    <div className="form-group">
      <label>Repetitions:</label>
        <input className="form-input" type="number" value={reps} onChange={(e) => setReps(e.target.value)} min="1" />
        </div>

      <button className="form-button" type="submit">Generate Workout</button>
      </form>
    </div>
  );
}

export default WorkoutForm;

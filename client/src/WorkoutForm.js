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
    <div className="form-container"> {/* Add this wrapper div with class */}
      <form onSubmit={handleSubmit}>
        <label>
          Muscle Group:
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
      </label>
      <br />
      <label>
        Number of Exercises:
        <input type="number" value={numberOfExercises} onChange={(e) => setNumberOfExercises(e.target.value)} min="1" />
      </label>
      <br />
      <label>
        Sets:
        <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} min="1" />
      </label>
      <br />
      <label>
        Repetitions:
        <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} min="1" />
      </label>
      <br />
      <button className="form-button" type="submit">Generate Workout</button>
      </form>
    </div>
  );
}

export default WorkoutForm;

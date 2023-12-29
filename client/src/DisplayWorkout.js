import React from 'react';
import './DisplayWorkout.css'; // Import the CSS file

function DisplayWorkout({ workout }) {
    if (!workout || !workout.exercises) {
        return <div className="loading-container">Loading...</div>;
    }

    return (
        <div className="display-workout-container">
            <h2>Generated Workout</h2>
            <p>Muscle Group: {workout.muscleGroup}</p>
            <p>Sets: {workout.sets}, Reps: {workout.reps}</p>
            {workout.exercises.map((group, index) => (
                <div key={index}>
                    <h3>{group.muscleGroup}</h3>
                    <ul>
                        {group.exercises.map((exercise, idx) => <li key={idx}>{exercise}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default DisplayWorkout;

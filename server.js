const express = require('express');
const app = express();
const port = 3001;

const exercisesData = require('./exercises.json');
const exercises = exercisesData.reduce((acc, group) => {
  acc[group.muscleGroup] = group.exercises;
  return acc;
}, {});

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint to serve exercises data
app.get('/api/exercises', (req, res) => {
  res.json(exercises);
});

// POST endpoint to generate a workout
app.post('/api/generate-workout', (req, res) => {
  const { muscleGroup, numberOfExercises, sets, reps } = req.body;

  // Placeholder for workout generation logic
  const workout = generateWorkout(muscleGroup, numberOfExercises, sets, reps);

  res.json(workout);
});

// Function to generate a workout routine
function generateWorkout(muscleGroup, numberOfExercises, sets, reps) {
  
  // Check if muscleGroup is empty
  if (!muscleGroup) {
    return { error: "Please select a Muscle Group" };
  }

  // Initialize selectedExercises array
  let selectedExercises = [];
  numberOfExercises = Number(numberOfExercises);

  // Handle 'fullBody' case
  if (muscleGroup === 'fullBody') {
    // Select specific number of exercises from each group
    for (const group of exercisesData) {
      const exercisesFromGroup = getRandomSubset(group.exercises, numberOfExercises);
      selectedExercises.push({
        muscleGroup: group.muscleGroup,
        exercises: exercisesFromGroup
      });
    }
  } 
  // Handle specific muscle group case
  else if (muscleGroup in exercises) {
    const exercisesFromGroup = getRandomSubset(exercises[muscleGroup], numberOfExercises);
    selectedExercises.push({
      muscleGroup: muscleGroup,
      exercises: exercisesFromGroup
    });
  }
  // If muscleGroup is not recognized
  else {
    return { error: "Invalid Muscle Group selected" };
  }

  return {
    muscleGroup: muscleGroup === 'fullBody' ? 'Full Body' : muscleGroup,
    exercises: selectedExercises,
    sets,
    reps
  };
}


function getRandomSubset(array, size) {
  let subset = [];
  let copiedArray = [...array];
  while (subset.length < size && copiedArray.length > 0) {
    const index = Math.floor(Math.random() * copiedArray.length);
    subset.push(copiedArray.splice(index, 1)[0]);
  }
  return subset;
}


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

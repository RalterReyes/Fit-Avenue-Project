function generateWorkout() {
    const workouts = [
        "20 push-ups + 30 squats + 20 sit-ups",
        "1-minute plank + 15 burpees + 20 lunges",
        "30 jumping jacks + 20 mountain climbers + 15 push-ups",
        "10 burpees + 20 squat jumps + 30-second side plank",
        "20 kettlebell swings + 15 push-ups + 30-second wall sit",
        "15 dumbbell curls + 20 bench dips + 30 bicycle crunches"
    ];

    const randomIndex = Math.floor(Math.random() * workouts.length);
    document.getElementById("workout-result").textContent =
        "Try this: " + workouts[randomIndex];
}

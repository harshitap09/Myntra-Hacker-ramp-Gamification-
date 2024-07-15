let streakCount = 0;

// Function to increase streak count and update display
function increaseStreak() {
  streakCount++;
  document.getElementById('current-streak').innerText = streakCount;
  localStorage.setItem('streakCount', streakCount);
}

// Function to take the daily quiz
function takeQuiz() {
  // Simulate quiz completion (replace with actual quiz logic)
  setTimeout(() => {
    increaseStreak();
    alert('Quiz completed! Your daily streak has increased by 1.');
  }, 2000); // 2-second delay to simulate quiz completion
}

// Load streak count from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
  streakCount = localStorage.getItem('streakCount') || 0;
  document.getElementById('streak-count').innerText = streakCount;
});
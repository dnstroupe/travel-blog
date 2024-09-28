// Music control
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');
let musicStarted = false;

// Function to start music
function startMusic() {
  if (!musicStarted) {
    music.play().then(() => {
      musicStarted = true;
      music.muted = false;
      updateMusicToggleText();
    }).catch(error => {
      console.error('Error playing audio:', error);
      musicToggle.textContent = "Audio playback failed";
    });
  }
}

// Update music toggle button text
function updateMusicToggleText() {
  musicToggle.textContent = music.muted ? "Unmute Music" : "Mute Music";
}

// Mute/Unmute toggle for the music
musicToggle.addEventListener('click', () => {
  if (!musicStarted) {
    startMusic();
  } else {
    music.muted = !music.muted;
    updateMusicToggleText();
  }
});

// Start music on any user interaction with the page
document.body.addEventListener('click', startMusic, { once: true });

// Load saved preferences
if (localStorage.getItem('musicMuted') === 'true') {
  music.muted = true;
}
updateMusicToggleText();

// Save preferences when changed
music.addEventListener('volumechange', () => {
  localStorage.setItem('musicMuted', music.muted);
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle('dark');
  body.classList.toggle('bg-gray-100');
  body.classList.toggle('bg-gray-900');
  body.classList.toggle('text-gray-800');
  body.classList.toggle('text-white');
  
  // Save dark mode preference
  localStorage.setItem('darkMode', body.classList.contains('dark'));
  
  // Update button text
  darkModeToggle.textContent = body.classList.contains('dark') ? "Light Mode" : "Dark Mode";
}

// Apply dark mode if previously set
if (localStorage.getItem('darkMode') === 'true') {
  toggleDarkMode();
}

// Dark mode toggle event listener
darkModeToggle.addEventListener('click', toggleDarkMode);

// Initialize dark mode toggle text
darkModeToggle.textContent = body.classList.contains('dark') ? "Light Mode" : "Dark Mode";

// Simple form validation for contact form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name && email && message) {
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  } else {
    alert('Please fill in all fields before submitting.');
  }
});

// Simple login functionality (for demonstration purposes only)
const loginForm = document.getElementById('login-form');
const loginStatus = document.getElementById('login-status');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // This is a mock login. In a real application, you would validate against a backend.
  if (username === 'demo' && password === 'password') {
    loginStatus.textContent = 'Login successful!';
    loginStatus.style.color = 'green';
  } else {
    loginStatus.textContent = 'Invalid username or password.';
    loginStatus.style.color = 'red';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('modeToggle');
const body = document.body;

function applyMode(mode) {
if (mode === 'light') {
    body.classList.remove('dark-mode');
    body.removeAttribute('data-bs-theme');
} else {
    body.classList.add('dark-mode');
    body.setAttribute('data-bs-theme', 'dark');
}
}

// Load saved mode or default to dark
const savedMode = localStorage.getItem('mode') || 'dark';
applyMode(savedMode);
toggle.checked = savedMode === 'dark';

// Handle toggle switch
toggle.addEventListener('change', () => {
const newMode = toggle.checked ? 'dark' : 'light';
localStorage.setItem('mode', newMode);
applyMode(newMode);
});
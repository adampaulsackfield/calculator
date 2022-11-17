const themeToggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');

// Add event listener to checkbox for theme toggler.
themeToggle.addEventListener('change', () => {
	body.classList.toggle('light-mode');
});

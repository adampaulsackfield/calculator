// Simple theme-toggler - Adds classes to change to a light mode.

const themeToggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');
const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.calculator__button');

// Add event listener to checkbox for theme toggler.
themeToggle.addEventListener('change', () => {
	if (body.classList.contains('dark-mode')) {
		body.classList.replace('dark-mode', 'light-mode');
	} else {
		body.classList.replace('light-mode', 'dark-mode');
	}
	// body.classList.toggle('light-mode');
	// body.classList.toggle('dark-mode');
});

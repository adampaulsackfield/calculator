// Simple theme-toggler - Adds classes to change to a light mode.

const themeToggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');
const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.calculator__button');

// Add event listener to checkbox for theme toggler.
themeToggle.addEventListener('change', () => {
	body.classList.toggle('light-mode');
	calculator.classList.toggle('light-mode');
	buttons.forEach((button) => button.classList.toggle('light-mode'));
});

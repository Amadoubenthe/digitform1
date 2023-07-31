const form = document.querySelector('form');

form.addEventListener('submit', event => {
	event.preventDefault();

	const nameElement = document.getElementById('name');
	console.log(nameElement.value);
});

// Recuper le nom

const nameElement = document.getElementById('name');
console.log(nameElement.value);

// Rcuperer un checkbox
const checkboxElement = document.getElementById('conditions');
console.log(checkboxElement.checked);

// Recuper les elements radio
const contacts = document.querySelectorAll('input[type=radio]');

for (let index = 0; index < contacts.length; index++) {
	if (contacts[index].checked) {
		console.log(contacts[index].value);
	}
}

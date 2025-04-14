let nameField = document.getElementById('') as HTMLInputElement;
let ageField = document.getElementById('');

//...

console.log(nameField.value);
/* console.log(ageField.value); */ //ERROR: Typescript is not sure if 'ageField' has 'value' 
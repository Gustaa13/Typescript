type Age = string | number;

let age1: Age = 40;
let age2: Age = '35';

function showAge(age: Age): Age {
    return age;
}

showAge(age1);
showAge(age2);

/* 
type User = {
    name: string,
    age?: number
}; 
*/

// Or

interface User{
    name: string
}

interface User{ // adding another type
    age?: number
}

function showUser(user: User){
    return `Nome: ${user.name} Idade: ${user.age}`;
}

showUser({
    name: 'Gustavo',
    age: 18
});

showUser({
    name: 'Fulano',
})
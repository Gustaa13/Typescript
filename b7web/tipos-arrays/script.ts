let personalName: string = 'Gustavo';

let age: number = 20;

let programmer: boolean = true;

let names: string[] = ['Fulano', 'sicrano', 'beltrano', personalName];

let ages: number[] = [15, age, 25, 30];
// Or
let numbers: Array<number> = [15, 16, 17, 18];

/* numbers.push(personalName); */ // ERROR: It's an array of numbers
numbers.push(age);

// But

let numbers2: any = [15, 16, 17, 18];
numbers2.push(personalName); // Now the array is of any type
numbers2.push(age);
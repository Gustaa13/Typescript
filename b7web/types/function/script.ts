function firstLetterUpperCase(name: string): string {
    let firstLetter: string = name.charAt(0).toUpperCase();
    return `${firstLetter}${name.substring(1)}`;
}

/* firstLetterUpperCase(15); */ // ERROR: The parameter of this function is the string type 
let personalName: string = firstLetterUpperCase('gustavo');

function subtract(n1: number, n2: number):number {
    return n1 + n2;
}

/* let string: string = subtract(15, 5); */ //ERROR: The return this function is the number type;
let number: number = subtract(20, 10);

let names: string[] = ['gustavo', 'vitor', 'dante', 'boma', 'eduarda'];

names.forEach(function(name: string) {
    console.log(name.toUpperCase());
});

/* Type for functions */

type MathFunction = (n1: number, n2: number) => number;

const sum: MathFunction = (n1, n2) => {
    return n1 + n2;
}

const sub: MathFunction = (n1, n2) => {
    return n1 - n2;
}

/* void */

function elementRemove(element: HTMLElement): void {
    element.remove();
}

elementRemove(document.createElement("div"));

/* special case */
type AnyThing = () => void;

const thing: AnyThing = () => {
    return 'a';
}

let theReturn = thing();
thing();
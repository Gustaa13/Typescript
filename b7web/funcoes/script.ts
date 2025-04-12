function firstLetterUpperCase(name: string) {
    let firstLetter: string = name.charAt(0).toUpperCase();
    return `${firstLetter}${name.substring(1)}`;
}

/* firstLetterUpperCase(15); */ // ERROR: The parameter of this function is the string type 
firstLetterUpperCase('gustavo'); 
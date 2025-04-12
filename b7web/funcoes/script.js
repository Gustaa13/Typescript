function firstLetterUpperCase(name) {
    var firstLetter = name.charAt(0).toUpperCase();
    return "".concat(firstLetter).concat(name.substring(1));
}
firstLetterUpperCase('gustavo');

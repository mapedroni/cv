console.log("hello world")

function nameTransform(name) {
	var lowerName = name.toLowerCase();
	var firstLetter = lowerName[0];
	var firstCapitalLetter = firstLetter.toUpperCase();
	var nameWithoutFirstLetter = lowerName.substring(1, lowerName.length);
	var correctName = firstCapitalLetter + nameWithoutFirstLetter;
	return correctName;
}

function checkAge(age) {
    if(age < 0) {
        return false;

    } else {
        return true;
    }       
}
function repeatSentence(sentence, times) {
    for(var i = 0; i < times; i = i +1)
    console.log(i + " " + sentence)
}

function listTransform(listOfNames) {
	var transformedNames = [];
for(var i = 0; i < listOfNames.length; i = i + 1) { 
	var transformedNameI = nameTransform(listOfNames[i]);
		transformedNames.push(transformedNameI);
	} 
	return transformedNames;
}
function upperName(name) {
    return name.toUpperCase ();
}
function applyTransform(listOfNames, transformFunction) {
	var transformedNames = [];
for(var i = 0; i < listOfNames.length; i = i + 1) { 
	var transformedNameI = transformFunction(listOfNames[i]);
		transformedNames.push(transformedNameI);
	} 
	return transformedNames;
}

function isPrime(n) {
    if(n = 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97){
        return false;
    } else {
        return true;
    }
}
function nameCut(name){
    var name = '';
    var lunghezzaStringa = frase.lenght;
    return length
}
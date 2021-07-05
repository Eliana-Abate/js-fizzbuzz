/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/ 

var numbers = [];
console.log(numbers);

var fizz = 'Fizz';
var buzz = 'Buzz';
var fizzBuzz = 'FizzBuzz';

for(var i = 1; i < 100; i++) {
    if(numbers % 3 == 0) {
        numbers === fizz;
        console.table(numbers);

    } else if(numbers % 5 == 0) {
        numbers === buzz;
        console.table(numbers);

    } else if(numbers % 15 == 0) {
        numbers === fizzBuzz;
        console.table(numbers);

    } else {
        numbers == numbers;
    }   
}

console.table(numbers);




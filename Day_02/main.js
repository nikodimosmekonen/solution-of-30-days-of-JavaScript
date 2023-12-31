/*Use lastIndexOf to find the position of the last 
occurrence of the word because in the following 
sentence:'You cannot end a sentence with because because because is a conjunction'*/

let sentence='You cannot end a sentence with because because because is a conjunction';

console.log(sentence.lastIndexOf('because'));

//Use repeat() method to print 30 Days Of JavaScript 2 times

let repeat='30 Days Of JavaScript';
console.log(repeat.repeat(2));

//I hope this course is not full of jargon. Check if jargon is in the sentence.

let string01= 'I hope this course is not full of jargon.';
console.log(string01.includes('jargon'));

//Use console.log() and escape characters to print the following pattern.

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

/*Use substr to slice out the phrase because because because from the
following sentence:'You cannot end a sentence with because because
because is a conjunction*/

let because='You cannot end a sentence with because because because is a conjunction';
console.log(because.substr(31,23));

/*Use match() to count the number of all because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */

console.log(because.match(/because/gi));

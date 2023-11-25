/*
First remove all the punctuations and change the string to 
array and count the number of words in the array
 */

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words= text.split('.');
words = words.toString();
words= words.split(' ');
words = words.toString();
words= words.split(',');

words.splice(6,1);
words.splice(9,1);
words.splice(10,1);
words.splice(11,1);
words.splice(12,1);
words.splice(13,1);

console.log(words);
console.log(words.length);

/*
In the webTechs array check if Sass exists in the array and 
if it exists print 'Sass is a CSS preprocess'.
 If it does not exist add Sass to the array and print the array.
*/
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];

webTechs.includes('Sass')
  ?console.log('Sass is a CSS preprocess')
  :webTechs.push('Sass');
console.log(webTechs);

//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);

let median = (ages[4]+ages[5])/2;
console.log(median);

let average;
let sum = 0;
let i=0;
while(ages[i]){
    sum += ages[i];
    i+=1;
}
average = sum/i;
console.log(average);

let range = ages[ages.length -1]-ages[0];
console.log(range);

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
const a = countries.slice(0,10);
console.log(a);

/*
Find the middle country(ies) in the countries array
*/


/*
Divide the countries array into two equal arrays 
if it is even. If countries array is not even , 
one more country for the first half.
*/
const firstHalf = countries.slice(0,(countries.length)/2);
const secondHalf = countries.slice((countries.length)/2);
console.log(secondHalf)

/*
Use for loop to iterate from 0 to 100 and
print the sum of all evens and the sum of all odds.
*/

let evenSum=0;
let oddSum=0;

for(let i=0;i<=100;i++){
    if(i%2==0){
        evenSum+=i;
    }else{
        oddSum+=i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`);

/*
Develop a small script which generate a six characters random id:
*/


const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomString = '';
for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
}

console.log(randomString);

/*
Write a script which generates a random hexadecimal number.
*/
let hexadecimal = '012356789abcdef';
let randomHex = '';
for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexadecimal.length);
    randomHex += hexadecimal[randomIndex];
}

console.log('#'+randomHex);

/*
Use the countries array to create the following array of arrays:
*/
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
  ] 
  let newCountriesArray= [];
  for(let i=0;i<countries.length;i++){
    newCountriesArray.push([countries[i], countries[i].substr(0,3).toUpperCase(), countries[i].length]);
  }
  console.log(newCountriesArray);

  /*
  Using the above countries array, find the country
  containing the biggest number of characters.
  */

let bigCount = 0; 
let indexCount;
  for(let i=0;i<newCountriesArray.length;i++){
    if(newCountriesArray[i][2] > bigCount){
        bigCount = newCountriesArray[i][2];
        indexCount = i;
    }
}
console.log(newCountriesArray[indexCount][0]);

/*
Use the webTechs array to create the following array of arrays:
*/

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let newWebTechsArray= [];
  for(let i=0;i<webTechs.length;i++){
    newWebTechsArray.push([webTechs[i], webTechs[i].length]);
  }
console.log(newWebTechsArray);

/*
Copy countries array(Avoid mutation)
*/
let newCountriesArray02 = countries.slice();
console.log(newCountriesArray02);
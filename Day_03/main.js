// /*Using prompt get the year the user was born and if the
// user is 18 or above allow the user to drive if not tell 
// the user to wait a certain amount of years.*/

// let yearOfBirth= prompt('Enter birth year:','');200
// let currYear=new Date().getFullYear();
// let age= currYear-yearOfBirth;
// age>=18
//     ?alert(`You are ${age}. You are old enough to drive`)
//     :alert(`You are ${age}. You will be allowed to drive after ${18-age} years.`);

/*
Write a script that prompt the user to enter number of years.
Calculate the number of seconds a person can live. Assume some 
one lives just hundred years 
 */

// let years = prompt('Enter number of years you live:','');
// const secondsInYear = 31536000;
// alert(`You lived ${secondsInYear*years} seconds.`)

/*
Create a human readable time format using the Date time object

    YYYY-MM-DD HH:mm
    DD-MM-YYYY HH:mm
    DD/MM/YYYY HH:mm

Create a human readable time format using the Date time object.
The hour and the minute should be all the time two digits
(7 hours should be 07 and 5 minutes should be 05 )

*/

let now = new Date();

let year = now.getFullYear();
let date;
let month;
let hour;
let minute;

now.getDate() >=0 && now.getDate()<10
    ?date=`0${now.getDate()}`
    :date=now.getDate();

now.getMonth() >=0 && now.getMonth()<10
    ?month=`0${now.getMonth()+1}`
    :month=now.getMonth()+1;

now.getMinutes() >=0 && now.getMinutes()<10
    ?minute=`0${now.getMinutes()}`
    :minute=now.getMinutes();

now.getHours() >=0 && now.getHours()<10
    ?hour=`0${now.getHours()}`
    :hour=now.getHours();

console.log(`YYYY-MM-DD HH:mm ${year}-${month}-${date} ${hour}:${minute}`)
console.log(`DD-MM-YYYY HH:mm ${date}-${month}-${year} ${hour}:${minute}`)
console.log(`DD/MM/YYYY HH:mm ${date}/${month}/${year} ${hour}:${minute}`)
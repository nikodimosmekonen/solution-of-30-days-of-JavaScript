/*
Write a code which can give grades to students
according to theirs scores:
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/

let score;
score = prompt('The Score','');
if(score<=100 && score>=0){
    if(score>80){
        console.log('A');
    }else if(score>70){
        console.log('B');
    }else if(score>60){
        console.log('C');
    }else if(score>50){
        console.log('D');
    }else{
        console.log('F');
    }
}else{
    console.log('Incorrect Value');
}

/*
Check if the season is Autumn, Winter, Spring
or Summer. If the user input is :
        September, October or November, the season is Autumn.
        December, January or February, the season is Winter.
        March, April or May, the season is Spring
        June, July or August, the season is Summer
*/

let month;
month = prompt('The Month','').toUpperCase();
if(month == 'September'|| month == 'October' || month == 'November'){
    console.log('Autmn');
}else if(month == 'December'|| month == 'January' || month == 'February'){
    console.log('Winter');
}else if(month == 'March'|| month == 'April' || month == 'May'){
    console.log('Spring');
}else if(month == 'June'|| month == 'July' || month == 'August'){
    console.log('Summer');
}else{
    console.log('Incorrect Month');
}

/*
Check if a day is weekend day or a working day.
 Your script will take day as an input.
*/

let day;
day = prompt('The day :').toLowerCase();
let weekDays ='monday tuesday wednsday thursday friday';
let weekEnd = 'sunday saturday';
if(weekDays.includes(day)){
    console.log(`${day} is a working day.`);
}else if(weekEnd.includes(day)){
    console.log(`${day} is a weekend.`);
}else{
    console.log('It is not a week day.');
}

/**
Write a program which tells the number of days in a month.
        January - 31 days
        February - 28 days in a common year and 29 days in leap years
        March - 31 days
        April - 30 days
        May - 31 days
        June - 30 days
        July - 31 days
        August - 31 days
        September - 30 days
        October - 31 days
        November - 30 days
        December - 31 days
 */
let monthOfTheYear= prompt('Enter The month: ','').toLowerCase();
let monthWith_31_Days = 'january march may july august october december';
let monthWith_30_Days= 'april june september november';
let monthWith_28_Days='february';

if(monthWith_31_Days.includes(monthOfTheYear)){
    console.log(`${monthOfTheYear} has 31 days`);
}else if(monthWith_30_Days.includes(monthOfTheYear)){
    console.log(`${monthOfTheYear} has 30 days`);
}else if(monthWith_28_Days.includes(monthOfTheYear)){
    console.log(`${monthOfTheYear} has 28 days`);
}else{
    console.log('It is not a month');
}

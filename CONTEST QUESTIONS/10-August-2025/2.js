// Determine whether the a given calender date is valid or invalid. A calendar date is valid if it meets the following rules:

// --> Month must be b/w 1 & 12.
// --> Days must fit the month & year.
//   1.) 31 day month -> Jan, Mar, May, Jul, Aug, Oct, Dec
//   2.) 30 day month -> Apr, Jun, Sep, Nov
//   3.) Feb -> 28 days (29 if leap year)

let date = 29;
let month = 2;
let year = 2016;

// Check the condition first

if(month<1 || month>12){
  console.log("Invalid Month")
} else {
  let daysInMonth;
  if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8|| month == 10 || month == 12){
    daysInMonth = 31;
  } else if(month == 4 || month == 6 || month == 9 || month ==11){
    daysInMonth = 30;
  }else if((year%4 == 0 && year%100 !=0) || (year%400 == 0)){
    daysInMonth = 29;
  } else {
    daysInMonth = 28;
  }

  if(date<1 || date>daysInMonth){
    console.log("Invalid Date");
  } else {
    console.log("Valid Date");
  }
}

// Output:
// Valid Date
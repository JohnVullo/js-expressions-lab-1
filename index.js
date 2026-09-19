//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

//creating variables to store total and avg temp for F and C
let tot_temperature_in_celsius
let tot_temperature_in_fahrenheit
let avg_temperature_in_celsius
let avg_temperature_in_fahrenheit


//Converting F to C
function convertFtoC(fDaysUnconvert){
    let convFTemp = (fDaysUnconvert - 32) * 5 / 9
    return convFTemp
}

//Converting C to F
function convertCtoF(cDaysUnconvert){
    let convCTemp = (cDaysUnconvert * 9 / 5) + 32
    return convCTemp
}

//Creating variables to store data
const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

// Adding all variables of days of F temp
let fDaysUnconvert = day1TempF + day3TempF + day5TempF + day7TempF
+ day9TempF + day11TempF + day13TempF + day15TempF + day17TempF + day19TempF
+ day21TempF + day23TempF + day25TempF + day27TempF + day29TempF

// Adding all variables of days of C temp
let cDaysUnconvert = day2TempC + day4TempC + day6TempC + day8TempC + day10TempC
+ day12TempC + day14TempC + day16TempC + day18TempC + day20TempC + day22TempC
+ day24TempC + day26TempC + day28TempC + day30TempC

/* Checking if 15 day totals add
console.log("15 day F total: ", fDaysUnconvert)
console.log("15 day C total: ", cDaysUnconvert)
*/

//Converts and stores all C days to F temp
let convertedCDay2 = convertCtoF(day2TempC)
let convertedCDay4 = convertCtoF(day4TempC)
let convertedCDay6 = convertCtoF(day6TempC)
let convertedCDay8 = convertCtoF(day8TempC)
let convertedCDay10 = convertCtoF(day10TempC)
let convertedCDay12 = convertCtoF(day12TempC)
let convertedCDay14 = convertCtoF(day14TempC)
let convertedCDay16 = convertCtoF(day16TempC)
let convertedCDay18 = convertCtoF(day18TempC)
let convertedCDay20 = convertCtoF(day20TempC)
let convertedCDay22 = convertCtoF(day22TempC)
let convertedCDay24 = convertCtoF(day24TempC)
let convertedCDay26 = convertCtoF(day26TempC)
let convertedCDay28 = convertCtoF(day28TempC)
let convertedCDay30 = convertCtoF(day30TempC)

//Converts and stores all F days to C
let convertedFDay1 = convertFtoC(day1TempF)
let convertedFDay3 = convertFtoC(day3TempF)
let convertedFDay5 = convertFtoC(day5TempF)
let convertedFDay7 = convertFtoC(day7TempF)
let convertedFDay9 = convertFtoC(day9TempF)
let convertedFDay11 = convertFtoC(day11TempF)
let convertedFDay13 = convertFtoC(day13TempF)
let convertedFDay15 = convertFtoC(day15TempF)
let convertedFDay17 = convertFtoC(day17TempF)
let convertedFDay19 = convertFtoC(day19TempF)
let convertedFDay21 = convertFtoC(day21TempF)
let convertedFDay23 = convertFtoC(day23TempF)
let convertedFDay25 = convertFtoC(day25TempF)
let convertedFDay27 = convertFtoC(day27TempF)
let convertedFDay29 = convertFtoC(day29TempF)

/* Checking to see if conversion code works
console.log("Day temperature in C: ", day2TempC)
console.log("Day temperature converted to F: ", convertedCDay2)

console.log("Day temperature in F: ", day1TempF)
console.log("Day temperature converted to C", convertedFDay1)
*/

//Adds total of all F days
tot_temperature_in_fahrenheit = fDaysUnconvert + convertedCDay2
+ convertedCDay4 + convertedCDay6 + convertedCDay8 + convertedCDay10
+ convertedCDay12 + convertedCDay14 + convertedCDay16 + convertedCDay18
+ convertedCDay20 + convertedCDay22 + convertedCDay24 + convertedCDay26
+ convertedCDay28 + convertedCDay30

//Computes average of all days in F
avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30

tot_temperature_in_celsius = cDaysUnconvert + convertedFDay1 
+ convertedFDay3 + convertedFDay5 + convertedFDay7 + convertedFDay9
+ convertedFDay11 + convertedFDay13 + convertedFDay15 + convertedFDay17
+ convertedFDay19 + convertedFDay21 + convertedFDay23 + convertedFDay25
+ convertedFDay27 + convertedFDay29

avg_temperature_in_celsius = tot_temperature_in_celsius / 30

console.log("Display total temp in F: ", tot_temperature_in_fahrenheit)

console.log("Display average temp in F: ", avg_temperature_in_fahrenheit) 

console.log("Display total temp in C: ", tot_temperature_in_celsius)

console.log("Display average temp in C: ", avg_temperature_in_celsius)

module.exports = {
     tot_temperature_in_fahrenheit,
     tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
     avg_temperature_in_celsius
};
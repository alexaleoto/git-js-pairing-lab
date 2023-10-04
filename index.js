//Code your solutions in this file
const fiveToOneHundred = () => {
   for (let i=5; i <= 100; i++ ) {
console.log([i]);
   } 
}
//fiveToOneHundred()

const multiplesOfThree = () => {
    for( let i = 1;i < 100; i++) {
        if(i%3 === 0) {
            console.log(i);
        }
    }
};
// multiplesOfThree();

const multiplesOfThreeOrFive = () => {
    for( let i = 1;i < 100; i++) {
        if(i%3 ===0 || i%5 === 0) {
            console.log(i);
        }
}
}
// multiplesOfThreeOrFive()

const untilNum = (num) => {
    for(let i = 1; i <= num; i++) {
        console.log(i);
    }
};
//untilNum(100);
 
const multiply = (num1, num2) => {
    return num1*num2
}
//console.log(multiply(6,9))

const add = (num1, num2) => {
    if(num1 === num2) {
        return (num1+num2) *3;
    } else {
        return (num1+num2);
    }
}
// console.log(add(6,9));
// console.log(add(9,9));
const isNegative = (num) => {
    if ( num >= 0) {
        return false
    } else {return true}
}

// console.log(isNegative(8))
// console.log(isNegative(-8))

const triangleArea = (height, base) => {
    return (base*height)/2;
}
// console.log(triangleArea(10,20));
const betweenTwentyAndFourty = (num) => {
    if ( num < 40 && num > 20) {
        return true
    } else {return false}
}
// console.log(betweenTwentyAndFourty(25))
// console.log(betweenTwentyAndFourty(15))

const largest = (num1,num2,num3) => {
    if(num1 > num2 && num1 > num3) {
        return num1;
    } else if(num2 >num1 && num2 >num3) {
        return num2;
    } else {
        return num3;
    }
};
// console.log(largest(1000,200,30));
const printTime = () => {
    const d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
// printTime()

const isLeapYear = (year)=>{
    let stringYear = year.toString();
    if(stringYear[stringYear.length - 1] === "0" && stringYear[stringYear.length - 2] === "0") {
        if(year % 400 === 0) {
            return true;
        } else {
            return false
        }
    } else {
        if(year % 4 === 0) {
            return true;
        } else {
            return false
        }
    }
};
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2020));
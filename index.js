/*Hey Alexa and Cris! Thanks for the submission! You both showed a solid understanting of the logic for these problems. I provided some feed back on some of the code and main take aways at the end.*/

//Code your solutions in this file
const fiveToOneHundred = () => {
   for (let i=5; i <= 100; i++ ) {//Make sure to put a space between your variable and value: `i = 5` vs `i=5`
console.log([i]);//make sure to indent, and you do not need to put the `i` into brackets. 
   } 
}
//fiveToOneHundred()

const multiplesOfThree = () => {
    for( let i = 1;i < 100; i++) {// have spaces for( let i = 1; i < 100; i++) 
        if(i%3 === 0) {// Make sure to spaces (i % 3 === 0)
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
}// watch your indentation
}
// multiplesOfThreeOrFive()

const untilNum = (num) => {
    for(let i = 1; i <= num; i++) {
        console.log(i);
    } //Be consistent with how you use semicolons. Make sure that it's consistent with the project. 
};
//untilNum(100);
 
const multiply = (num1, num2) => {
    return num1*num2 // make sure that you have spaces. 
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
const isNegative = (num) => { // Try using the ternary operator. 
    if ( num >= 0) {
        return false
    } else {return true}
}

// console.log(isNegative(8))
// console.log(isNegative(-8))

const triangleArea = (height, base) => {
    return (base*height)/2;// spacing 
}
// console.log(triangleArea(10,20));
const betweenTwentyAndFourty = (num) => { // Try using the ternary operator. 
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

/*
largest:
This code works and the logic is fine. The push here is what Math method can you use to make this work? This can be done in one line. 
*/
// console.log(largest(1000,200,30));
const printTime = () => {
    const d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
// printTime()
/*printTime
your code would work, but it might not provide leading zeros for single-digit minutes and seconds, which means the time might not always be displayed in the format HH:MM:SS. 
 ('0' + d.getHours()).slice(-2) : this ensures that hours, minutes, and seconds are always displayed with leading zeros, and the time is in the HH:MM:SS format.
*/


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
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(2020));
// Although the code for this will work I want to push here:
// I would like for you to refactor this so that is is only if statemenmt and an else, also there is not need to use string methods (although that was interesting). 
//14.
const absoluteNineteen = (num) => {
    let absDifference = Math.abs(num - 19);
    return absDifference > 19 ? absDifference * 3 : null;
}
// console.log(absoluteNineteen(100));
/*
This logic has an issue: if absDifference is greater than 19, the condition absDifference > 19 would never be true, because absDifference represents the absolute difference, which can't be greater than 19 if the original number is less than 19. Therefore, the function will always return null in this case.

To fix the logic, you should check if num is greater than 19, not absDifference.
*/
//16.
const changeString = (string) => {
    let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if(lowerAlphabet.includes(string[i])) {
            let index = lowerAlphabet.indexOf(string[i]);
            if(string[i] === "z") {
                newString+= lowerAlphabet[0]
            } else {
                newString+= lowerAlphabet[index + 1]
            }
        } else if (upperAlphabet.includes(string[i])) {
            let index = upperAlphabet.indexOf(string[i]);
            if(string[i] === "Z") {
                newString+= upperAlphabet[0]
            } else {
                newString+= upperAlphabet[index + 1]
            }
        } else {
            newString+= string[i];
        }
    }
    return newString;
};
// console.log(changeString("The quick brown fox jumped over the lazy dog"));

/*
Hey Alexa and Cris! The last bit a feedback I have for you is to work on writing consistenly spaced out code. Here is a sample of what you wrote vs what we are looking for:
your code
const multiplesOfThreeOrFive = () => {
    for( let i = 1;i < 100; i++) {
        if(i%3 ===0 || i%5 === 0) {
            console.log(i);
        }
}
}

VS
Clean Code
const multiplesOfThreeOrFive = () => {
   for( let i = 1;i < 100; i++) {
      if ( i % 3 ===0 || i % 5 === 0 ) {
         console.log(i);
      };
   };
};

This may seem small but when you are writing more code have code that iswritten more clearly that is readable then your eyes and who every looks at your code will thank you for it.  

There were a few things in some of the bonus question that were not quite right and I gave you some feed back on how you improve you code. 

Can't wait to see your next submission!
*/

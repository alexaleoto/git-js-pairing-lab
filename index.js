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

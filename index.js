//Code your solutions in this file
const fiveToOneHundred = () => {
   for (let i=5; i <= 100; i++ ) {
console.log([i]);
   } 
}
//fiveToOneHundred()

const multiplesOfThree = () => {
    for( let i = 1;i < 100; i++) {
        if(i*3 < 100) {
            console.log(i*3);
        }
    }
};
//multiplesOfThree();

const multiplesOfThreeOrFive = () => {
    for( let i = 1;i < 100; i++) {
        if(i*3 < 100) {
            console.log(i*3,);
        } 
         if (i*5 <100) {
            console.log( i*5)
        }
}
}
multiplesOfThreeOrFive()
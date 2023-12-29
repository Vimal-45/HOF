const adder = (number1)=>{
    return (number2)=>{
        console.log(number2);
        return number1+number2
    }
}

const hoc = adder(10)
console.log(hoc(15));


// In JavaScript, a higher-order function (HOF) is a function that either takes one or more functions
//  as an argument, or returns a function as its result.
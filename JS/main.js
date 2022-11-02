for (let num = 1; num <= 100; num++) {
    logNumber = num
    if (num % 3 === 0 && num % 5 ===0) {
        logNumber = "fizzbuzz"
    } else if (num % 3 === 0){
        logNumber = "fizz"
    } else if (num % 5 === 0 ){
     logNumber = "buzz"
    }
        console.log(logNumber);


}
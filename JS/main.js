const contCard = document.querySelector(".row");

for (let num = 1; num <= 100; num++) {
    let logNumber = num;
    if (num % 3 === 0 && num % 5 === 0) {
        logNumber = "fizzbuz";
        contCard.innerHTML +=`<div class="col col-1 text-center d-flex align-items-center justify-content-center rounded-5 fizzbuzz-number gino"><h2> ${logNumber} </h2></div>`;
    } else if (num % 3 === 0) {
        logNumber = "fizz";
        contCard.innerHTML +=`<div class="col col-1 text-center d-flex align-items-center justify-content-center rounded-5 fizz-number gino"><h2> ${logNumber} </h2></div>`;
    } else if (num % 5 === 0) {
        logNumber = "buzz";
        contCard.innerHTML +=`<div class="col col-1 text-center d-flex align-items-center justify-content-center  rounded-5 buzz-number gino"><h2> ${logNumber} </h2></div>`;
    }else {
        contCard.innerHTML +=`<div class="col col-1 text-center d-flex align-items-center justify-content-center normal-number rounded-5 gino"><h2> ${logNumber} </h2></div>`;

    }

  

}
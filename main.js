let numberContainer = document.querySelector('.ratingNumbers');
let rateNumberSelected = document.querySelector('.text__selected--number');
let submitBtn = document.querySelector('.button__submit');
let reviewState = document.querySelector('.review');
let thankyouState = document.querySelector('.thankyouPage');

numberContainer.addEventListener('click', event => {
    let numberSelected = event.target.innerText;
    rateNumberSelected.innerText = numberSelected;
    if(numberSelected > 0 || numberSelected <=5){

        submitBtn.addEventListener('click', () => {
            reviewState.style.display = 'none';
            thankyouState.style.display = 'flex';
        });

    }
});

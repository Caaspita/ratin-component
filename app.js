const buttons = document.querySelectorAll('.btn');
const page = document.getElementById('page');
const page2 = document.getElementById('page2');
let rateNumber = 0;

buttons.forEach(function(button){
   button.addEventListener('focus', function() {
    rateNumber = parseInt(button.value)
   })
})

function rate(){
    if(rateNumber != 0){
        page.classList.toggle('ocultar');
        page2.classList.toggle('ocultar');

        const selectornumber = document.getElementById('numrate');
        selectornumber.innerHTML = rateNumber
    }
}
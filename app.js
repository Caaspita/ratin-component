const eleccion = 0;

function btn(num){

    if(num === 1){
         const eleccion = 1;
         console.log(eleccion)
    }else if(num ===2){
        const eleccion = 2;
        console.log(eleccion)
    }else if(num ===3){
        const eleccion = 3;
        console.log(eleccion)
    }else if(num ===4){
        const eleccion = 4;
        console.log(eleccion)
    }else if(num ===5){
        const eleccion = 5;
        console.log(eleccion)
    }
}


function submit(eleccion) {
    if(eleccion != 0){
        const numrate = document.getElementById('numrate');
        numrate.innerText = 2;
        window.location.href = 'rating.html';
    }
   
}
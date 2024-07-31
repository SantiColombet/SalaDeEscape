
let segundosTotales = 600; 
const timer = document.querySelector("#timer");
const boton = document.querySelector("#boton-menu");

boton.addEventListener("click", () =>{
    localStorage.setItem('segundos', 600);
});

function updateTimer() {
    if (segundosTotales <= 0) {
        timer.textContent = "00:00";
        clearInterval(timerInterval);
        return;
    }

    const minutos = Math.floor(segundosTotales / 60);
    const segundos = segundosTotales % 60;
    
    const tiempo = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    timer.textContent = tiempo;
    
    localStorage.setItem('segundos', segundosTotales);

    segundosTotales--;
    
    if(segundosTotales == 0){
        console.log("hola")
        Swal.fire({
            title: 'Se termino tu tiempo...',
            confirmButtonText: 'continuar',
            text: "Podés seguir jugando, pero no pudiste escapar a tiempo",
            imageHeight: 400,
            customClass: {
                image: 'custom-swal-image'
            }
        });
    }
}

const segundosGuardados = localStorage.getItem('segundos');
if (segundosGuardados) {
    segundosTotales = parseInt(segundosGuardados);
}
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();



document.addEventListener("DOMContentLoaded", () => {
    const pista4 = document.querySelector("#pista4");
    
    pista4.addEventListener("click", () =>{
        Swal.fire({
            title: 'Pista',
            confirmButtonText: 'continuar',
            imageUrl: "../Images/General/Al_McWhiggin.png",
            text: "Intenta juntar pares de personajes para pasar el juego",
            imageHeight: 400,
            customClass: {
                image: 'custom-swal-image'
            }
        });
    });
});
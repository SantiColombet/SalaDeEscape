document.addEventListener("DOMContentLoaded", () => {
    const pista3 = document.querySelector("#pista3");

    pista3.addEventListener('click', () =>{
        Swal.fire({
            title: 'Pista',
            confirmButtonText: 'continuar',
            imageUrl: "../Images/General/Al_McWhiggin.png",
            text: "Fijate en la cantidad de ventanas, hay algo raro, ¿O no?",
            imageHeight: 400,
            customClass: {
                image: 'custom-swal-image'
            }
        });
    });
});
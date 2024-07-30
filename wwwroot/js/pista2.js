document.addEventListener("DOMContentLoaded", () => {
    const pista2 = document.querySelector("#pista2");

    pista2.addEventListener('click', () => {
        Swal.fire({
            title: 'Pista',
            confirmButtonText: 'continuar',
            imageUrl: "../Images/General/Al_McWhiggin.png",
            text: "Mira detalladamente la espalda de buzz, ¿Hay algun elemento que sea electronico?",
            imageHeight: 400,
            customClass: {
                image: 'custom-swal-image'
            }
        });
    });
});
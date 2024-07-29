document.addEventListener("DOMContentLoaded", () => {
    const pista2 = document.querySelector("#pista2");

    pista2.addEventListener('click', function() {
        Swal.fire({
            title: 'Pista',
            confirmButtonText: 'continuar',
            imageUrl: "../Images/General/Al_McWhiggin.png",
            text: "Pensá en algun elemento que alimente a dispositivos electricos, como lo puede ser un control de una televisión, un auto a control remoto",
            imageHeight: 400,
            customClass: {
                image: 'custom-swal-image'
            }
        });
    });
});
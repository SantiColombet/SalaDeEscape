document.addEventListener("DOMContentLoaded", () => {
    const pista4 = document.querySelector("#pista4");
    
    pista4.addEventListener("click", () =>{
        Swal.fire({
            title: 'Pista',
            confirmButtonText: 'continuar',
            imageUrl: "../Images/General/Al_McWhiggin.png",
            text: "Busca cerca de las cajas registradoras y de las paredes de los muebles que hay en la tienda de juguetes",
            imageHeight: 400,
            customClass: {
                image: 'custom-swal-image'
            }
        });
    });
});
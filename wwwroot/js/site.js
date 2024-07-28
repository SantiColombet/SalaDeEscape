

const button = document.querySelector("#hola");

button.addEventListener("click", () =>{
    Swal.fire({
        title: 'Pista',
        text: 'Buzz',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
})
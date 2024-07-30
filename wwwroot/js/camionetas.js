const camioneta_falsa = document.querySelector("#camioneta_falsa");
const camioneta_correcta = document.querySelector("#camioneta_correcta");
const div = document.querySelector("#boton-secreto");
let contador = 0;


camioneta_falsa.addEventListener("click", () =>{
  Swal.fire({
      title: 'INCORRECTO',
      html: '<iframe width="450" height="315" src="https://www.youtube.com/embed/GrwcycSgmPU?autoplay=1&start=50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      confirmButtonText: 'Volver a intentarlo',
      customClass: {
          image: 'custom-swal-image'
      }
  })
})

camioneta_correcta.addEventListener("click", () =>{
  if(contador < 1)
  {
    const button = document.createElement("button");
    button.textContent = "Pasa el mouse por aca";
    button.classList.add("habitacion-3-boton");
  
    div.appendChild(button);
  
    button.addEventListener("mouseover", () => {
        button.textContent = "clave: andy";
    });
  
    button.addEventListener("mouseout", () => {
        button.textContent = "Pasa el mouse por aca";
    });
  }
  contador++;
})
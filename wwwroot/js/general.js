const img = document.querySelector(".img-pista")



img.addEventListener("click", () =>{
    Swal.fire({
        title: '¡Pista!',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        imageUrl: "../Images/General/Al_McWhiggin.png",
        imageHeight: 400,
        confirmButtonText: 'Continuar',
        customClass: {
            image: 'custom-swal-image'
        }
    })
})


function obtenerNumeroHabitacion() {
    const nombreArchivo = window.location.pathname.split('/').pop();
    console.log(nombreArchivo);
    const match = nombreArchivo.match(/Habitacion/);
    return match ? parseInt(match[1]) : 0;
}

// Función para actualizar las monedas
function actualizarMonedas() {
    const numeroHabitacion = obtenerNumeroHabitacion();
    const monedas = document.querySelectorAll('.moneda');
    
    monedas.forEach((moneda, index) => {
        if (index < numeroHabitacion) {
            moneda.src = '/ruta/a/moneda-desbloqueada.png';
            moneda.classList.add('desbloqueada');
        } else {
            moneda.src = '/ruta/a/moneda-bloqueada.png';
            moneda.classList.remove('desbloqueada');
        }
    });
}

// Función para crear y mostrar el contenedor de monedas
function crearContenedorMonedas() {
    const contenedor = document.createElement('div');
    contenedor.id = 'monedas-container';
    contenedor.style.position = 'fixed';
    contenedor.style.left = '10px';
    contenedor.style.top = '50%';
    contenedor.style.transform = 'translateY(-50%)';
    contenedor.style.display = 'flex';
    contenedor.style.flexDirection = 'column';
    contenedor.style.gap = '10px';

    for (let i = 0; i < 5; i++) {
        const moneda = document.createElement('img');
        moneda.className = 'moneda';
        moneda.src = '/ruta/a/moneda-bloqueada.png';
        moneda.alt = `Moneda ${i + 1}`;
        moneda.style.width = '30px';
        moneda.style.height = '30px';
        contenedor.appendChild(moneda);
    }

    document.body.appendChild(contenedor);
}

// Función principal
function inicializarSistemaMonedas() {
    const esHabitacion = /habitacion\d+\.cshtml/i.test(window.location.pathname);
    
    if (esHabitacion) {
        crearContenedorMonedas();
        actualizarMonedas();
    }
}

// Ejecutar la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', inicializarSistemaMonedas);
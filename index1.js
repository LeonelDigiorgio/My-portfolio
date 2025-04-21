// Lo que hace este código es alternar la clase hidden de las imágenes en CERTIFICADOS, lo que las hará visibles cuando se haga clic en el botón.
//la función mostrarCertificado() usará el número como parámetro para identificar el certificado y alternar la visibilidad.
function mostrarCertificado(num) {
    // Construir el id del certificado con el número pasado
    const certificadoId = `certificado${num}`;
    
    // Obtener el certificado a través del id dinámico
    const certificado = document.getElementById(certificadoId);
    
    // Alternar la visibilidad del certificado
    certificado.classList.toggle('hidden');
}

//Este código agrega o elimina la clase dark-mode del body cada vez que se hace clic en el botón, lo que cambiará los estilos definidos en CSS.
const modoOscuroButton = document.querySelector('#modo-oscuro');

modoOscuroButton.addEventListener('click', () => {
    console.log('Botón de modo oscuro presionado');
    document.body.classList.toggle('dark-mode');
});
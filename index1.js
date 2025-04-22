// Lo que hace este código es alternar la clase 'hidden' de las imágenes en CERTIFICADOS,
// lo que las hará visibles cuando se haga clic en el botón.
function mostrarCertificado(num) {
    const certificado = document.getElementById(`certificado${num}`);
    certificado.classList.toggle('hidden');
}

// Este código agrega o elimina la clase 'dark-mode' del body cada vez que se hace clic en el botón,
// lo que cambiará los estilos definidos en CSS y también cambia el texto del botón.
const modoOscuroButton = document.querySelector('#modo-oscuro');

const modoClaroText = "Modo Claro";
const modoOscuroText = "Modo Oscuro";

// Usamos un solo event listener para manejar ambos cambios: el de clase y el de texto.
modoOscuroButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Cambiar el texto del botón dependiendo del estado del modo oscuro.
    if (document.body.classList.contains('dark-mode')) {
        modoOscuroButton.textContent = modoClaroText;  // Cambiar el texto a "Modo Claro"
    } else {
        modoOscuroButton.textContent = modoOscuroText; // Cambiar el texto a "Modo Oscuro"
    }
});
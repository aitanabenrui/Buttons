const popupTimeout = setTimeout(() => {
        // Añadir el mensaje directamente dentro del contenedor con innerHTML
        document.querySelector('#popup').style.display = 'flex';
}, 1500);

//Listener para que al pulsar donde sea se quite el popup

document.querySelector('#popup').addEventListener('click', () => {
        clearTimeout(popupTimeout); // Cancelar el mensaje si hay interacción
        document.querySelector('#popup').style.display = '';
    });

const noButton = document.querySelector('#no-button');
const yesButton = document.querySelector('#yes-button');

noButton.addEventListener('click', ()=>{
    clearTimeout(popupTimeout); // Cancelar el mensaje si hay interacción
        document.querySelector('#popup').style.display = '';
} );

yesButton.addEventListener('click', ()=>{
    clearTimeout(popupTimeout); // Cancelar el mensaje si hay interacción
        document.querySelector('#popup').style.display = '';
} );

document.querySelectorAll('button').forEach(button => {  //porfavor, recuerda hacer un forEach cuando uses querySelectorAll
    if (!button.closest('#popup')) { // Excluir los botones dentro del popup, closest es un método de los elementos del DOM que permite buscar el ancestro más cercano que coincida con un selector CSS.
        button.addEventListener('click', () => {
            document.querySelector('#popup').style.display = 'flex';
        });
    }
});

//uso de clearTimeout: cancela el temporizador, evitando que el popup se muestre si el usuario ya ha interactuado

const card = document.querySelector('.card'); // Asegúrate de tener esta clase en tu HTML
// Evitar que el popup se cierre si se hace clic dentro de la card
card.addEventListener('click', (event) => {
    event.stopPropagation(); // Detiene la propagación del evento al popup . 
});
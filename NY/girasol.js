const canvas = document.getElementById("girasolCanvas");
const context = canvas.getContext("2d");
function dibujarFondo() {
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#00bfff"); // Color turquesa claro
    gradient.addColorStop(1, "#007acc"); // Color turquesa oscuro
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function dibujarFlor(x, y) {
    const talloLength = 150; // Longitud del tallo

    // Dibuja el tallo
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y - talloLength);
    context.strokeStyle = "green";
    context.lineWidth = 5;
    context.stroke();

    // Dibuja los pétalos ovalados uno por uno
    const num_petalos = 6;
    const petalo_length_x = 50; // Longitud en el eje X
    const petalo_length_y = 25;  // Longitud en el eje Y

    function dibujarPetal(i) {
        if (i < num_petalos) {
            context.save(); // Guarda el estado actual del contexto
            context.translate(x, y - talloLength); // Establece el centro de la rotación

            // Rotación para dibujar el pétalo en la posición correcta
            context.rotate((2 * Math.PI * i) / num_petalos);

            context.fillStyle = "yellow";
            context.beginPath();
            context.ellipse(0, 0, petalo_length_x, petalo_length_y, 0, 0, Math.PI);
            context.closePath();
            context.fill();

            context.beginPath();
            context.ellipse(0, 0, petalo_length_x, petalo_length_y, 0, Math.PI, 2 * Math.PI);
            context.closePath();
            context.fill();

            context.restore(); // Restaura el estado original del contexto para la próxima iteración

            setTimeout(() => dibujarPetal(i + 1), 500); // Dibuja el siguiente pétalo después de 500 milisegundos
        } else {
            // Dibuja el centro café después de dibujar los pétalos
            context.fillStyle = "brown";
            context.beginPath();
            context.arc(x, y - talloLength, 10, 0, Math.PI * 2);
            context.closePath();
            context.fill();
        }
    }

    // Dibuja los pétalos
    dibujarPetal(3);
}

// Función para dibujar todas las flores
function dibujarFlores() {
    dibujarFlor(50, 200); // 1 flor
    dibujarFlor(150, 250); // 2 flor
    dibujarFlor(250, 200); // 3 flor
    dibujarFlor(350, 250); // 4 flor
    dibujarFlor(50, 400); // 5 flor
    dibujarFlor(150, 450); // 6 flor
    dibujarFlor(250, 400); // 7 flor
    dibujarFlor(350, 450); // 8 flor
    dibujarFlor(50, 600); // 9 flor
    dibujarFlor(150, 650); // 10 flor
    dibujarFlor(250, 600); // 11 flor
    dibujarFlor(350, 650); // 12 flor
}
// Dibuja el fondo degradado al inicio
dibujarFondo();

// Dibuja la imagen estática en la posición (400, 200)
const imagen = new Image(); // Crea un objeto de imagen
imagen.src = "imagen.jpg"; // Cambia "ruta_de_la_imagen.png" por la ruta de tu imagen

// Cuando la imagen se carga, dibújala en la posición (400, 200)
imagen.onload = function () {
    context.drawImage(imagen, 500, 20, 250, 350);
    dibujarFlores(); // Llama a la función para dibujar todas las flores
     context.fillStyle = "black";
    context.font = "32px Arial";
    context.fillText("vL1c", 600, 440);
};

// Contador para controlar las repeticiones de la animación
let contadorAnimacion = 0;
const numRepetitions = 100; // Número de repeticiones deseadas

// Función para repetir la animación
function repetirAnimacion() {
    if (contadorAnimacion < numRepetitions) {
        // Limpia el lienzo antes de dibujar las flores
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Dibuja el fondo degradado al inicio
dibujarFondo();

        // Dibuja la imagen estática
        context.drawImage(imagen, 500, 20, 250, 350);
        context.fillStyle = "black";
        context.font = "32px Arial";
        context.fillText("vL1c", 600, 440);

        // Llama a la función para dibujar las flores
        dibujarFlores();

        // Incrementa el contador de animación
        contadorAnimacion++;

        // Espera 3 segundos antes de iniciar la siguiente repetición de la animación
        setTimeout(repetirAnimacion, 3000);
    }
}

// Inicia la primera repetición de la animación
repetirAnimacion();

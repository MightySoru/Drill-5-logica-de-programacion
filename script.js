// Creamos un número aleatorio entre 1 y 100 como número secreto
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Creamos un array vacío para guardar los intentos del usuario
let intentos = [];

// Seleccionamos elementos del DOM para interactuar con ellos
const inputNumero = document.getElementById('inputNumero');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const historial = document.getElementById('historial');

// Escuchamos el clic del botón para ejecutar la función
btnAdivinar.addEventListener('click', () => {
  // Obtenemos y limpiamos el valor del input
  const valor = inputNumero.value.trim();

  // Convertimos a número
  const numero = Number(valor);

  // Validamos si es un número válido (entre 1 y 100)
  if (isNaN(numero) || numero < 1 || numero > 100) {
    mensaje.textContent = '⚠️ Ingresa un número válido entre 1 y 100.';
    return; // terminamos aquí si no es válido
  }

  // Guardamos el número en la lista de intentos
  intentos.push(numero);

  // Verificamos si adivinó
  if (numero === numeroSecreto) {
    // Si acierta:
    mensaje.textContent = '🎉 ¡Felicidades! Adivinaste el número secreto.';
    historial.innerHTML = `<p>👉 Intentos realizados: ${intentos.join(', ')}</p>`;
    
    // Desactivamos input y botón para terminar el juego
    btnAdivinar.disabled = true;
    inputNumero.disabled = true;
  } else {
    // Si falla:
    mensaje.textContent = '❌ Ups, el número es incorrecto. Intenta nuevamente.';
    inputNumero.value = '';         // limpiamos el input
    inputNumero.focus();            // lo dejamos listo para el siguiente intento
  }
});

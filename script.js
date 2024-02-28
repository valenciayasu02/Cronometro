const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const iniciar = document.getElementById("iniciar");
const detener = document.getElementById("detener");
const reiniciar = document.getElementById("reiniciar");

let intervalo;
let tiempoSegundos = 0;

//  actualizar el cronómetro
function actualizarCronometro() {
  tiempoSegundos++;

  // Convertir segundos a minutos y horas
  const minutosAux = Math.floor(tiempoSegundos / 60);
  const horasAux = Math.floor(minutosAux / 60);

  // Formatear el tiempo
  const segundosMostrar = tiempoSegundos % 60;
  const minutosMostrar = minutosAux % 60;
  const horasMostrar = horasAux % 60;

  // Mostrar el tiempo en el cronómetro
  segundos.textContent = segundosMostrar < 10 ? `0${segundosMostrar}` : segundosMostrar;
  minutos.textContent = minutosMostrar < 10 ? `0${minutosMostrar}` : minutosMostrar;
  horas.textContent = horasMostrar < 10 ? `0${horasMostrar}` : horasMostrar;
}

// Función para iniciar el cronómetro
function iniciarCronometro() {
  intervalo = setInterval(actualizarCronometro, 1000);
  iniciar.disabled = true;
  detener.disabled = false;
}

// Función para detener el cronómetro
function detenerCronometro() {
  clearInterval(intervalo);
  iniciar.disabled = false;
  detener.disabled = true;
}

// Función para reiniciar el cronómetro
function reiniciarCronometro() {
  tiempoSegundos = 0;
  actualizarCronometro();
  detenerCronometro();
}

// Eventos para los botones
iniciar.addEventListener("click", iniciarCronometro);
detener.addEventListener("click", detenerCronometro);
reiniciar.addEventListener("click", reiniciarCronometro);

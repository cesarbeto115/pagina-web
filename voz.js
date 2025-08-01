let voces = [];

window.speechSynthesis.onvoiceschanged = () => {
  voces = window.speechSynthesis.getVoices();
};

function iniciarLectura() {
  const texto = document.getElementById('objetivo').innerText;
  const mensaje = new SpeechSynthesisUtterance(texto);
  mensaje.lang = "es-ES";

  const voz = voces.find(v => v.name === "Microsoft Sabina");

  if (voz) {
    mensaje.voice = voz;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(mensaje);
}

function detenerLectura() {
  window.speechSynthesis.cancel();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('boton-voz').addEventListener('click', iniciarLectura);
  document.getElementById('detener-voz').addEventListener('click', detenerLectura);
});
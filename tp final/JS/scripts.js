import { enviarDatos } from './api.js';

document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  enviarDatos(nombre, email, mensaje);
});

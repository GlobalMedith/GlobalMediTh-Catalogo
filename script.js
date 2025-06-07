document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const celular = document.getElementById('celular').value.trim();
  const ciudad = document.getElementById('ciudad').value.trim();
  const correo = document.getElementById('correo').value.trim();

  if (nombre && celular && ciudad && correo) {
    localStorage.setItem('datosUsuario', JSON.stringify({ nombre, celular, ciudad, correo }));
    window.location.href = 'catalogo.html';
  }
});

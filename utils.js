function solicitarCotizacion() {
  const datos = JSON.parse(localStorage.getItem('datosUsuario') || '{}');
  const fila = document.querySelector("#tabla tbody tr");
  if (!fila || !datos.nombre) {
    alert("No se puede enviar la cotización sin datos.");
    return;
  }

  const columnas = fila.querySelectorAll("td");
  const mensaje = \`*Solicitud de Cotización – Global MediTH*

Nombre: \${datos.nombre}
Celular: \${datos.celular}
Ciudad: \${datos.ciudad}
Correo: \${datos.correo}

Producto:
• Código: \${columnas[0].innerText}
• Descripción: \${columnas[1].innerText}
• Fórmula: \${columnas[2].innerText}
• Laboratorio: \${columnas[3].innerText}
• Cantidad: \${columnas[4].innerText}

Gracias por su preferencia.\`;

  const whatsapp = "https://wa.me/5212381646718?text=" + encodeURIComponent(mensaje);
  window.open(whatsapp, "_blank");
}
window.onload = () => {
  const tabla = document.querySelector("#tabla tbody");
  const fila = document.createElement("tr");
  fila.innerHTML = "<td>7501234567890</td><td>Paracetamol 500mg</td><td>Paracetamol</td><td>Genérico</td><td>2</td>";
  tabla.appendChild(fila);
};

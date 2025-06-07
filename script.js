
let datosCliente = {};
let folio = "";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const tablaBody = document.querySelector("#tabla-productos tbody");
  const catalogo = document.getElementById("catalogo");
  const buscador = document.getElementById("buscador");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    datosCliente = {
      nombre: document.getElementById("nombre").value.trim(),
      celular: document.getElementById("celular").value.trim(),
      ciudad: document.getElementById("ciudad").value.trim(),
      correo: document.getElementById("correo").value.trim()
    };
    if (Object.values(datosCliente).some(v => v === "")) {
      alert("Por favor completa todos los campos.");
      return;
    }
    folio = "COT-" + new Date().toISOString().slice(2,10).replace(/-/g, "") + "-" + Math.floor(Math.random()*900+100);
    document.getElementById("formulario").style.display = "none";
    catalogo.classList.remove("hidden");
    cargarProductos(productos);
  });

  function cargarProductos(lista) {
    tablaBody.innerHTML = "";
    lista.forEach((p, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><input type="checkbox" data-index="${i}"></td>
        <td>${p.codigo}</td>
        <td>${p.descripcion}</td>
        <td>${p.formula}</td>
        <td>${p.laboratorio}</td>
        <td><input type="number" min="1" value="1" class="cantidad" style="width:60px;"></td>
      `;
      tablaBody.appendChild(row);
    });
  }

  buscador.addEventListener("input", () => {
    const filtro = buscador.value.toLowerCase();
    const filtrados = productos.filter(p =>
      p.codigo.toLowerCase().includes(filtro) ||
      p.descripcion.toLowerCase().includes(filtro) ||
      p.formula.toLowerCase().includes(filtro)
    );
    cargarProductos(filtrados);
  });

  window.generarCotizacion = () => {
    const seleccionados = [];
    const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
    checkboxes.forEach((cb, i) => {
      if (cb.checked) {
        const cantidad = cb.closest("tr").querySelector(".cantidad").value;
        const p = productos[i];
        seleccionados.push({ ...p, cantidad });
      }
    });
    if (seleccionados.length === 0) {
      alert("Selecciona al menos un producto.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Global MediTH - Cotización", 10, 10);
    doc.setFontSize(10);
    doc.text(`Tel: 238 164 67 18  |  Email: globalmedith@gmail.com`, 10, 16);
    doc.text("Ubicación: Tehuacán, Puebla", 10, 22);
    doc.setFontSize(11);
    doc.text(`Folio: ${folio}`, 10, 32);
    doc.text(`Nombre: ${datosCliente.nombre}`, 10, 38);
    doc.text(`Celular: ${datosCliente.celular}`, 10, 44);
    doc.text(`Ciudad: ${datosCliente.ciudad}`, 10, 50);
    doc.text(`Correo: ${datosCliente.correo}`, 10, 56);
    doc.setFontSize(12);
    doc.text("Productos seleccionados:", 10, 66);
    let y = 74;
    seleccionados.forEach(p => {
      doc.text(`- ${p.codigo} | ${p.descripcion}`, 10, y);
      y += 6;
      doc.text(`  ${p.formula} | ${p.laboratorio} | Cantidad: ${p.cantidad}`, 10, y);
      y += 8;
    });
    doc.text("Gracias por su preferencia.", 10, y + 10);
    const nombreFile = `cotizacion_${folio}_${datosCliente.nombre.replace(/\s+/g,"")}.pdf`;
    doc.save(nombreFile);

    const mensaje = `Hola, soy ${datosCliente.nombre}, solicito una cotización (Folio ${folio}) desde el catálogo digital.`;
    window.open("https://wa.me/5212381646718?text=" + encodeURIComponent(mensaje), "_blank");
    setTimeout(() => location.reload(), 1500);
  };
});

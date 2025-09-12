const listaCarrito = document.getElementById('lista-carrito');

function agregarProducto(nombreProducto) {
  // Eliminar el mensaje "No hay productos" si existe
  if (listaCarrito.children.length === 1 && listaCarrito.children[0].textContent === 'No hay productos') {
    listaCarrito.innerHTML = '';
  }

  // Crear elemento de la lista
  const li = document.createElement('li');
  li.className = 'list-group-item agregado';
  li.textContent = nombreProducto;

  // Añadir al carrito
  listaCarrito.appendChild(li);

  // Quitar clase agregado después de un tiempo para normalizar el color
  setTimeout(() => li.classList.remove('agregado'), 1000);
}

function eliminarProducto() {
  // Eliminar último producto
  const items = listaCarrito.getElementsByTagName('li');
  if (items.length > 0) {
    const ultimo = items[items.length - 1];
    ultimo.classList.add('eliminado');
    setTimeout(() => {
      ultimo.remove();
      // Si se vacía la lista, mostrar mensaje
      if (listaCarrito.children.length === 0) {
        const liVacio = document.createElement('li');
        liVacio.className = 'list-group-item text-muted text-center';
        liVacio.textContent = 'No hay productos';
        listaCarrito.appendChild(liVacio);
      }
    }, 500);
  }
}
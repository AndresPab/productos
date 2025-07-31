const API_PRODUCTOS = 'http://localhost:3000/api/productos';

async function registrarProducto() {
    const form = document.getElementById('productoForm');
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });



    try {
        const response = await fetch(API_PRODUCTOS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const mensajeDiv = document.getElementById('mensajeExito');
        if (response.ok) {
            const result = await response.json();
            if (mensajeDiv) {
                mensajeDiv.textContent = `Producto registrado con ID: ${result.id}`;
                mensajeDiv.style.display = 'block';
            } else {
                alert(`Producto registrado con ID: ${result.id}`);
            }
            form.reset(); // Limpiar formulario
        } else {
            const error = await response.text();
            if (mensajeDiv) {
                mensajeDiv.textContent = 'Error: ' + error;
                mensajeDiv.style.display = 'block';
            } else {
                alert('Error: ' + error);
            }
        }
    } catch (error) {
        alert('Error de conexión: ' + error.message);
    }
}
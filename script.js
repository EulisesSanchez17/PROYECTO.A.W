document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpiar mensajes de error anteriores
    document.querySelectorAll('.error').forEach(function(el) {
        el.textContent = '';
    });

    // Obtener los valores del formulario
    let cedula = document.getElementById('cedula').value;
    let apellidos = document.getElementById('apellidos').value;
    let nombres = document.getElementById('nombres').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;

    // Validaciones con expresiones regulares
    let cedulaRegex = /^\d{10}$/;
    let nombreApellidoRegex = /^[a-zA-Z\s]+$/;
    let telefonoRegex = /^\d{9,10}$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    let isValid = true;

    if (!cedulaRegex.test(cedula)) {
        document.getElementById('cedulaError').textContent = "La cédula debe tener 10 dígitos y solo debe contener números.";
        isValid = false;
    }

    if (!nombreApellidoRegex.test(apellidos) || apellidos.length < 8) {
        document.getElementById('apellidosError').textContent = "Los apellidos solo deben contener letras y espacios, y no pueden tener menos de 8 caracteres.";
        isValid = false;
    }

    if (!nombreApellidoRegex.test(nombres) || nombres.length < 8) {
        document.getElementById('nombresError').textContent = "Los nombres solo deben contener letras y espacios, y no pueden tener menos de 8 caracteres.";
        isValid = false;
    }

    if (direccion.length < 4) {
        document.getElementById('direccionError').textContent = "La dirección debe tener al menos 4 caracteres.";
        isValid = false;
    }

    if (!telefonoRegex.test(telefono)) {
        document.getElementById('telefonoError').textContent = "El teléfono debe tener entre 9 y 10 dígitos y solo debe contener números.";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "El correo electrónico no es válido.";
        isValid = false;
    }

    if (isValid) {
        // Crear un objeto cliente
        let cliente = {
            cedula: cedula,
            apellidos: apellidos,
            nombres: nombres,
            direccion: direccion,
            telefono: telefono,
            email: email
        };

        // Mostrar el objeto cliente en consola para verificar
        console.log('Cliente a guardar:', cliente);

        // Almacenar el objeto cliente en el almacenamiento local
        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        clientes.push(cliente);
        localStorage.setItem('clientes', JSON.stringify(clientes));

        // Limpiar el formulario y los mensajes de error
        document.getElementById('clienteForm').reset();
        document.querySelectorAll('.error').forEach(function(el) {
            el.textContent = '';
        });

        alert("Datos guardados exitosamente.");

        // Mostrar en consola para verificar el almacenamiento local
        console.log('Clientes almacenados:', JSON.parse(localStorage.getItem('clientes')));
    }
});

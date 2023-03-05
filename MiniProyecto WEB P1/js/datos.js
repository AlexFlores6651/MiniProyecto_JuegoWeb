function guardarDatos(){
    
    // Obtener el puntaje y el tiempo actual y el usuario
    const username = document.getElementById('username-input').value;
    const puntaje = parseInt($('#puntos').text());
    const tiempo = $('#cronometro').text();

    // Obtener los datos del usuario del Local Storage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar si el usuario ya existe
    const usuarioIndex = usuarios.findIndex(u => u.username === username);

    if (usuarioIndex === -1) {
    // El usuario no existe, agregarlo
    usuarios.push({
        username,
        puntaje,
        tiempo
    });
    } else {
    // El usuario ya existe, actualizar los datos si el puntaje actual es mayor
    if (puntaje > usuarios[usuarioIndex].puntaje) {
        usuarios[usuarioIndex].puntaje = puntaje;
        usuarios[usuarioIndex].tiempo = tiempo;
    }
    }

    // Almacenar los datos actualizados en el Local Storage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    const alerta = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Datos guardados exitosamente!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    document.querySelector('#alertas').innerHTML = alerta;
    window.location.href = 'inicio.html';
}

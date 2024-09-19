document.getElementById('inicioForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío normal del formulario

    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    // Validamos que los campos no estén vacíos
    if (user === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Enviar la solicitud al servidor
    fetch('user.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Si la autenticación es correcta, redirige a la página de bienvenida
            localStorage.setItem('usuario', data.user); // Guardamos el nombre del usuario
            window.location.href = 'recetario.html';
        } else {
            // Mostrar el mensaje de error
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

});

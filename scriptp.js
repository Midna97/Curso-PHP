//Especifica la URL del servidor en donde se hará la Request (petición)
const url = 'localhost/PHP/consultapostres.php';

// Realiza la solicitud GET
fetch("consultapostres.php")
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    //Respuesta en formato JSON
    return response.json();
  })
  .then(data => {
    // Maneja la información del switch
    console.log(data);
    
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });
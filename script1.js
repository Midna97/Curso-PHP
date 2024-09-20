/*document.getElementById('inicioForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío normal del formulario

    var alimentos = document.getElementById('Lasagna').value;

    fetch('consulta.php', {
        method: 'GET',
     headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            Lasagna: Lasagna
        })

    });
    const getData = async () => {
        const response = await fetch('localhost/PHP/inicio.html/comida.htmlLasagna=${Lasagna}&records=${Lasagna}');
        if (!response.ok) {
            // Aquí manejamos el error que devolvió el request HTTP 
            console.log('error: ', response.status, response.statusText);
            return {error: {status: response.status, statusText: response.statusText}};
        };
        const data = await response.json();
        return data;
    })

});*/

//Especifica la URL del servidor en donde se hará la Request (petición)
const url = 'localhost/PHP/consulta.php';

// Realiza la solicitud GET
fetch(consulta.php)
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


// Realiza la solicitud GET
fetch(consultapostres.php)
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
    

// Realiza la solicitud GET
fetch(consultabebidas.php)
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


   




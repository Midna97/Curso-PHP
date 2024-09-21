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


/**
 * @param
 */
function getalimentos(tipoalimento){
  //Especifica la URL del servidor en donde se hará la Request (petición)
const url = `alimentos.php?alimentos=${tipoalimento}`;
const detailSection = document.getElementById('receta-detail');

// Realiza la solicitud GET
fetch(url)
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
    document.getElementById('title').innerText = data.title;
    document.getElementById('description').innerText = data.description;
    document.getElementById('instructions').innerText = data.instructions;
    detailSection.style.display = 'block';
    
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });


}



    



   




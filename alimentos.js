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



    



   




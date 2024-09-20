/**
 * 
 * @param receta (lasagna,carlota,mojito)
 */
/*function showRecetario(receta) {
    const recetario = {
        lasagna: {
            title: "Lasagna",
            description: "Lasagna tradicional",
            instructions: "ahsfkjsdhfkjshafjk"
        },
        carlota: {
            title: "Carlota",
            description: "Carlota de Limón",
            instructions: "sdjhfkjsdhkjshgkjs"
        },
        mojito: {
            title: "Mojito",
            description: "Mojito de fresa",
            instructions: "askjdghdfkjghdkjfgh"
        }
    };

    const detailSection = document.getElementById('receta-detail');
    document.getElementById('receta-title').innerText = recetario[receta].title;
    document.getElementById('receta-description').innerText = recetario[receta].description;
    document.getElementById('receta-instructions').innerText = recetario[receta].instructions;
    detailSection.style.display = 'block';

}*/

/**
 * @param {string} receta
 */
function showRecetario(receta){
    const detailSection = document.getElementById('receta-detail');
    let title = '';
    let description = '';
    let instructions = '';

    switch(receta) {
        case 'lasagna':
            title = "Lasagna";
            description = "Lasagna tradicional";
            instructions = "Precalienta el Horno a 180º. Aparte acitrona la cebolla, la zanahora y cocina por 5 min. Añade la carne, cocina 5 min y agrega el jitomate. En un recipiente agrega una capa con la pasta, seguido de una capa de carne, encìma agergar queso. Repetir el proceso hasta llenar el recipiente, tapa y cocina a 180º por media hora."
            break;
        case 'carlota':
            title = "Carlota";
            description = "Carlota de Limón";
            instructions = "Licúa leche condensada con leche evaporada y sin dejar de licuar, agrega el jugo de limón. En un refractario, coloca una capa de galletas, un poco de la mezcla de limón y repite hasta terminar.";
            break;
        case 'mojito':
            title = "Mojito"
            description = "Mojito de fresa";
            instructions = "En un vaso alto agregar hojas de menta y azúcar.Añada la pulpa, la soda, el jugo de limón y si lo desea el ron.";
            break;
        default:
            title = "Receta No Encontrada";
            description = "Lo sentimos, no se encontró la receta seleccionada.";
            instructions = "Lo sentimos no se encontró la receta seleccionada";
    }

    document.getElementById('receta-title').innerText = title;
    document.getElementById('receta-description').innerText = description;
    document.getElementById('receta-instructions').innerText = instructions;
    detailSection.style.display = 'block';
}

/**
 * 
 */
function hideRecetario() {
    document.getElementById('receta-detail').style.display = 'none';

}
/**
 * @param comida
 */
function showalimentos(comida){
    const detailSection = document.getElementById('receta-detail');
    let title = '';
    let description = '';
    let instructions = '';

    switch(comida) {
        case 'lasagna':
            title = "Lasagna";
            description = "Lasagna tradicional";
            instructions = "Precalienta el Horno a 180º. Aparte acitrona la cebolla, la zanahora y cocina por 5 min. Añade la carne, cocina 5 min y agrega el jitomate. En un recipiente agrega una capa con la pasta, seguido de una capa de carne, encìma agergar queso. Repetir el proceso hasta llenar el recipiente, tapa y cocina a 180º por media hora."
            break;
        case 'burrito':
            title = "Burrito";
            description = "Burrito";
            instructions = "En una sartén, calienta el aceite y fríe ½ cebolla hasta que cambie de color. Agrega el ajo, la carne, el Jugo MAGGI®, la Salsa Tipo Inglesa CROSSE & BLACKWELL®, 2 chiles, la sal con ajo y el perejil; cocina por 3 minutos. Rellena las tortillas con la preparación de carne, añade frijoles y queso, doblas las orillas y enrolla. Ásalos en una sartén por ambos lados y corta a la mitad.";
            break;
        case 'tacos':
            title = "Tacos"
            description = "Tacos";
            instructions = "Poner a fuego medio, agregar la carne, la paprika, y cocinar por 10 minutos revolviendo constantemente. En un sartén a fuego alto, calentar las tortillas por ambos lados. En cada tortilla, colocar 3 cucharadas de carne, 2 cucharadas de pico de gallo y 1 cucharada de Queso Americano. ";
            break;
        case 'tarta':
            title = "Tarta";
            description = "Tarta";
            instructions = "sdjfhkjashfa";
            break;
        case 'mouse':
            title = "Mouse";
            description = "Mouse de coco";
            instructions = "skjfGSDJFHASKJGKJDF";
            break;
        case 'carlota':
            title = "Carlota";
            description = "Carlota";
            instructions = "dsfkjdhgjksdfhsgjk";
            break;
        case 'mojito':
            title = "Mojito"
            description = "Mojito de fresa";
            instructions = "afhsdjkghdkjghdf";
            break;
        case 'limonada':
            title = "Limonada";
            description = "Limonada";
            instructions = "sajhfkjsdhakjfhgkj";
            break;
        case 'naranjada':
            title = "Naranjada";
            description = "Naranjada";
            instructions = "sjdfjshasgkjdfhg";
            break;
        default:
            title = "Receta No Encontrada";
            description = "Lo sentimos, no se encontró la receta seleccionada.";
            instructions = "Lo sentimos no se encontró la receta seleccionada";
    }

    document.getElementById('comida-title').innerText = title;
    document.getElementById('comida-description').innerText = description;
    document.getElementById('comida-instructions').innerText = instructions;
    detailSection.style.display = 'block';
}
/**
 * 
 */
function hidealimentos() {
    document.getElementById('receta-detail').style.display = 'none';

}





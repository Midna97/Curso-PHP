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
 * @param bebidas
 */
function showbebidas(bebidas){
    const detailSection = document.getElementById('receta-detail');
    let title = '';
    let description = '';
    let instructions = '';

    switch(bebidas) {
        case 'mojito':
            title = "Mojito";
            description = "Mojito de fresa";
            instructions = "Precalienta el Horno a 180º. Aparte acitrona la cebolla, la zanahora y cocina por 5 min. Añade la carne, cocina 5 min y agrega el jitomate. En un recipiente agrega una capa con la pasta, seguido de una capa de carne, encìma agergar queso. Repetir el proceso hasta llenar el recipiente, tapa y cocina a 180º por media hora."
            break;
        case 'limonada':
            title = "Limonada";
            description = "Limonada";
            instructions = "Licúa leche condensada con leche evaporada y sin dejar de licuar, agrega el jugo de limón. En un refractario, coloca una capa de galletas, un poco de la mezcla de limón y repite hasta terminar.";
            break;
        case 'naranjada':
            title = "Naranjada";
            description = "Naranjada";
            instructions = "En un vaso alto agregar hojas de menta y azúcar.Añada la pulpa, la soda, el jugo de limón y si lo desea el ron.";
            break;
        default:
            title = "Receta No Encontrada";
            description = "Lo sentimos, no se encontró la receta seleccionada.";
            instructions = "Lo sentimos no se encontró la receta seleccionada";
    }

    document.getElementById('bebidas-title').innerText = title;
    document.getElementById('bebidas-description').innerText = description;
    document.getElementById('bebidas-instructions').innerText = instructions;
    detailSection.style.display = 'block';
}
/**
 * 
 */
function hidebedidas() {
    document.getElementById('receta-detail').style.display = 'none';

}





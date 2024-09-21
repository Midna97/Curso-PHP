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
 * @param postres
 */
function showpostres(postres){
    const detailSection = document.getElementById('receta-detail');
    let title = '';
    let description = '';
    let instructions = '';

    switch(postres) {
        case 'tarta':
            title = "Tarta";
            description = "Tarta";
            instructions = "Para la base, mezcla las galletas Marías con ½ barra de mantequilla, vierte en un molde para tarta, presiona ligeramente para formar una costra y refrigera.Para el relleno, bate el Chocolate para Mesa ABUELITA® con la crema batida y agrega poco a poco ½ barra de mantequilla. Vierte la mezcla en el molde para tarta y refrigera. Decora con los frutos rojos y las hojas de menta."
            break;
        case 'mouse':
            title = "Mouse";
            description = "Mouse de coco";
            instructions = "Calentar en una cazuela la leche y la crema de coco. Disolver en la mezcla la gelatina y dejar enfriar. Batir las claras a punto de nieve. Montar la nata. Añadir la leche de coco a la nata montada y se mezcla todo con movimiento envolvente. Añadir finalmente las claras montadas con movimiento envolvente y dejar enfriar en copas.";
            break;
        case 'carlota':
            title = "Carlota"
            description = "Carlota";
            instructions = "Licúa leche condensada con leche evaporada y sin dejar de licuar, agrega el jugo de limón. En un refractario, coloca una capa de galletas, un poco de la mezcla de limón y repite hasta terminar.";
            break;
        default:
            title = "Receta No Encontrada";
            description = "Lo sentimos, no se encontró la receta seleccionada.";
            instructions = "Lo sentimos no se encontró la receta seleccionada";
    }

    document.getElementById('postres-title').innerText = title;
    document.getElementById('postres-description').innerText = description;
    document.getElementById('postres-instructions').innerText = instructions;
    detailSection.style.display = 'block';
}
/**
 * 
 */
function hidepostres() {
    document.getElementById('receta-detail').style.display = 'none';
    
}





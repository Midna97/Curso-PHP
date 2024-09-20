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
            instructions = "En un vaso alto agregar hojas de menta y azúcar.Añada la pulpa de fresa, la soda, el jugo de limón y si lo desea el ron."
            break;
        case 'limonada':
            title = "Limonada";
            description = "Limonada";
            instructions = "Lava bien un limón y retírale la piel (sin la parte blanca). Pon la piel en el vaso de la batidora. Pela los 4 limones de modo que solo queden los gajos, sin piel ni parte blanca. Retira las pepitas.Pon los limones y el azúcar en el vaso de la batidora y tritura todo. Añade el hielo y el agua al vaso de la batidora. Tritura de nuevo hasta que quede todo bien integrado. Cuela la limonada.";
            break;
        case 'naranjada':
            title = "Naranjada";
            description = "Naranjada";
            instructions = "Lavar y pelar la naranja, poner en la licuadora con el agua y azúcar. Naranjada mineral. Licuar y colar en la jarra donde la presentarán. Poner poco a poco el agua mineral para así conservar más su sabor.";
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





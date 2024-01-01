
const textConsoleContainer = document.getElementById('text-console');
const textConsole = document.getElementById('console-text');
const container = document.getElementById('text-reference-hidden');



window.addEventListener('resize', () => {
    textConsoleContainer.style.width = `${container.offsetWidth}px`
    console.log(container.offsetWidth);
})

const aboutText = `Saludos!,
*
Mi nombre es Erik, soy un desarrollador dedicado en la creación y mantenimiento de servidores web, así como en el diseño y desarrollo de páginas web, eCommerces y aplicaciones web.
*
En este espacio quiero compartir algunos proyectos modestos que he tenido el placer de desarrollar o están en proceso de desarrollo.
*
Mi enfoque abarca desde la implementación de soluciones backend hasta la creación de experiencias interactivas y atractivas en el frontend.
*
Estaría encantado de ser parte de tu proyecto y contribuir con mi pasión por el desarrollo. 
*
¡Gracias por tu visita! 
`

var isDoneAnimation = false;

function writeText(){
    textConsoleContainer.style.width = `${container.offsetWidth}px`
    var index = 0;
    
    var textLength = aboutText.length;
    function updateText(){
        if (index < textLength && !isDoneAnimation) {
            if(aboutText[index] == "*"){
                textConsole.innerHTML += '<br><br>';
            }else{
                textConsole.innerHTML += aboutText[index];
            }
            index++;
        }else{
            isDoneAnimation = true;
        }
    }
    
    
    setInterval(updateText, 25);
}



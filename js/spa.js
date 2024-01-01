var currentPage = "home";
const menuMobile = document.getElementById('menu-mobile');
const navBarMobile = 991;
const navHomeItemDown = document.getElementsByClassName('down-arrow')[0];
const navHomeItemUp = document.getElementsByClassName('up-arrow')[0];
const navHome = 555;
const fader = document.getElementById("fader")

function handlePage(target){
    // Ocultar menu en vista mobil
    if(window.innerWidth < navBarMobile) menuMobile.click();

    // Obtener el target desde la barra de navegación
    let newPage = target.id.split("-")[0];

    // Ocultar la página actual
    document.getElementById(currentPage).style.display = "none";

    // Setear variable currentPage con la nueva página
    currentPage = newPage;

    // Mostrar la página seleccionada
    document.getElementById(newPage).style.display = "flex";

    // Manejar animaciones
    handlePageAnimations();
}

function handlePageAnimations(){
    if(window.innerWidth < navHome){
        navHomeItemDown.style.display = "block";
        navHomeItemUp.style.display = "block";
    }else{
        navHomeItemDown.style.display = "none";
        navHomeItemUp.style.display = "none";
    }
}


window.addEventListener('resize', handlePageAnimations);
window.addEventListener('load', handlePageAnimations);
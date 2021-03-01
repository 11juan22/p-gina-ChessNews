//Para el efecto al hacer scroll
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cars',{delay:500});
ScrollReveal().reveal('.cars-banner-one',{delay:500});
ScrollReveal().reveal('.cars-banner-two',{delay:500});

//Para añadir o quitar una clase al hacer click en el menu-btn
document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show')

});
//-------animacion del buscador

bars_search = document.getElementById('ctn-bars-search');
inputSearhc = document.getElementById('inputSearch');
box_searhc = document.getElementById('box-search');
cover_ctn_search =  document.getElementById("cover-ctn-search");

document.querySelector('.nav-menu-right').addEventListener('click',() => {

    document.querySelector('#ctn-bars-search').classList.toggle('show')
    document.querySelector('#cover-ctn-search').classList.toggle('show')
    mostrarCajaBusqueda()    
});

document.querySelector('#cover-ctn-search').addEventListener('click',ocultar_buscador);

function mostrarCajaBusqueda(){
    inputSearhc.focus();
    box_searhc.style.display ="none"
    if(inputSearhc.value == ""){
        box_searhc.style.display ="none"
    }
}

function ocultar_buscador(){   
    document.querySelector('#ctn-bars-search').classList.toggle('show')
    document.querySelector('#cover-ctn-search').classList.toggle('show')
    inputSearhc.value = "";
    box_searhc.style.display ="none"
}

//Creando logica buscador
document.getElementById("inputSearch").addEventListener('keyup', buscador_interno);

function buscador_interno(){

    filter = inputSearhc.value.toUpperCase(); /*Pasamos lo que tenemos a mayuscula*/
    li = box_searhc.getElementsByTagName("li");//*obtenemos todas las etiquetas que se encuentren en el recuadro*/


    //Recorriendo elementos a filtrar
    for(i=0; i < li.length; i++){

        a=li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            box_searhc.style.display ="block";

            if(inputSearhc.value == ""){
                box_searhc.style.display ="none"
            }

        }else{
            li[i].style.display ="none";
        }

    }

}

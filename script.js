let menuVisible = false;
//función que oculta o muestra el menu:)
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible =false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible =true    
    }
}

function seleccionar(){
    //oculta el menu una vez que se selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//funcion  que aplica las animaciona a las habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills  = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("csharp");

        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("liderazgo");
        
    }
}
//se detecta el mouse para mostrar las animaciones 
window.onscroll = function(){
    efectoHabilidades();
}
///contacto code
/* numero1
const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#sendM');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event)
{
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('name'));
    $buttonMailto.setAttribute('href',`mailto:cristiansantiago808@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`);
    $buttonMailto.click();
}
*/
///PARTE 2 CON FORMSPREE

const $form =document.querySelector('#form');
$form.addEventListener('submit', handleSubmit);
//const mostrar = document.querySelector('mostrar')

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action,{
        method: this.method,
        body:form,
        headers:{
            'Accept': 'application/json'
        }
    });

    if(response.ok){
        this.reset();
            swal('¡Hola!', 'Gracias por contactarme, te escribire pronto', 'success');
           // alert('Gracias por contactarme, te escribire pronto :)');
        
    }else{
        
            swal('algo salio mal', 'vuelve a intentarlo ;(', 'error')
        
    }
}
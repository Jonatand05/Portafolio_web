document.addEventListener('DOMContentLoaded', function () {
    const openItems = document.getElementById("icon_menu");
    const itemsMenu = document.getElementById("open-items");

    openItems.addEventListener('click', function () {
        if (itemsMenu.classList.contains('show')) {
            itemsMenu.classList.remove('show');
            itemsMenu.classList.add('slide-hide');
        } else {
            itemsMenu.classList.add('show');
            itemsMenu.classList.remove('slide-hide');
            itemsMenu.classList.add('slide-left');
        }
    });
});


// PORCENTAJES

let number = document.getElementById('number');
let counter = 0;

setInterval(()=>{
    if(counter==50){
        clearInterval;
    }else{
        counter +=1;
        number.innerHTML= `${counter}%`
    }
    
},100)

let number1 = document.getElementById('number1');
let counter1 = 0;

setInterval(()=>{
    if(counter1==70){
        clearInterval;
    }else{
        counter1 +=1;
        number1.innerHTML= `${counter1}%`
    }
    
},100)

let number2 = document.getElementById('number2');
let counter2 = 0;

setInterval(()=>{
    if(counter2==60){
        clearInterval;
    }else{
        counter2 +=1;
        number2.innerHTML= `${counter2}%`
    }
    
},100)

let number3 = document.getElementById('number3');
let counter3 = 0;

setInterval(()=>{
    if(counter3==75){
        clearInterval;
    }else{
        counter3 +=1;
        number3.innerHTML= `${counter3}%`
    }
    
},100)

// Funcionamiento menu del portafolio

// Primero, se utiliza document.getElementsByClassName("active1") para buscar todos los elementos que tienen la clase "active1" (es decir, los elementos de la lista de menú que ya están activos). Esta función devuelve una lista de elementos con la clase especificada.
// Eliminar la clase "active1" del elemento activo actual:

// Luego, se verifica si existe algún elemento con la clase "active1" utilizando current.length > 0. Si hay elementos en la lista (current.length > 0 es verdadero), significa que hay un elemento activo actualmente.
// En ese caso, se elimina la clase "active1" del primer elemento de la lista utilizando current[0].className = current[0].className.replace(" active1", ""). Esto reemplaza "active1" con una cadena vacía en la clase del elemento, eliminando así la clase "active1" del elemento activo anterior.
// Agregar la clase "active1" al elemento seleccionado:

// Finalmente, se agrega la clase "active1" al elemento en el que se hizo clic utilizando event.target.className += " active1". Esto agrega la clase "active1" al elemento que ha sido seleccionado recientemente, lo que indica que ahora está activo.

function toggleActive(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    var target = event.target;
    var currentActive = document.querySelector('.menu_portafolio a.active1');
    if (currentActive) {
        currentActive.classList.remove('active1');
    }
    target.classList.add('active1');
    cambiarContenido(event);
}

// FUNCIONAMIENTO CONTENIDO DE GALERIA PORTAFOLIO

function cambiarContenido(event) {
    var opcion = event.target.textContent; // Obtener el texto del elemento de menú seleccionado
    var galeriaPort = document.querySelector('.galeria-port'); 

    // Limpiar el contenido actual de la galería-port
    galeriaPort.innerHTML = '';

    // Agregar el contenido correspondiente según la opción seleccionada
    switch (opcion) {
        case 'TODO':
            galeriaPort.innerHTML = `

                <div class="colproyectos">
                    <a class="proyecto1" href="https://jonatand05.github.io/RUMBO/" data-text="El proyecto front-end 'Rumbo', fue echo en mi tecnologo del sena. Es un web site de fantasticos lugares turisticos de colombia."></a>
                    <a class="proyecto2" href="https://jonatand05.github.io/web_Site-algoritmos/algoritmos.html" data-text="El proyecto 'Algoritmos con js' es un ejercicio echo con java script puro, el cual tiene funcionalidades de operaciones basicas como suma, promedio de notas, etc.."></a>
                    <a class="proyecto3" href="https://jonatand05.github.io/web_Site-figuras/" data-text="El proyecto 'Manipulación del Dom' es un ejercicio con la finalidad de aprender la Manipulación del Dom echo en el tecnolgo del sena."></a>
                </div>

                <div class="colproyectos">
                    <a class="proyecto4" href="https://jonatand05.github.io/Mr_Potato/" data-text="El proyecto 'Mr potato', es un ejercicio con la finalidad de aprender el manejo de capas en css, con la propiedad z-index."></a>
                    <a class="proyecto5" href="https://jonatand05.github.io/Veterinaria-y-PetShop/" data-text="El proyecto 'Amigos peludos', fue echo como trabajo para el tegnolgo del sena. Es un diseño echo por mi, con algunas referencias."></a>
                    <a class="proyecto6" href="https://jonatand05.github.io/web_Site_simuladorInversiones/" data-text="El proyecto 'Simulador de inversiones,' fue echo en el tecnolgo con el fin de aplicar algunas funciones de js nuevas en su momento para mi."></a>
                </div>

                <div class="colproyectos">
                    <a class="proyecto7" href="https://jonatand05.github.io/Web_site_mobile-Scape/" data-text="El proyecto front-end 'CineScape', es un diseño mobile para una aplicación de peliculas con diferentes funcionalidades echo en mi tecnolgo del sena.">proyecto 7</a>
                    <a class="proyecto8" href="https://jonatand05.github.io/Calculado_Js/" data-text="El proyecto 'calculadora' como su nombre lo dice, es una calculadora funcionable echa con Java script junto con la funcionalidad de cambio de modo.">proyecto 8</a>
                </div>
                
            `;
            break;
        case 'FRONT-END':
            galeriaPort.innerHTML = `
                <div class="colproyectos">
                    <a class="proyecto1" href="https://jonatand05.github.io/RUMBO/" data-text="El proyecto front-end 'Rumbo', fue echo en mi tecnologo del sena. Es un web site de fantasticos lugares turisticos de colombia."></a>
                    <a class="proyecto3" href="https://jonatand05.github.io/web_Site-figuras/" data-text="El proyecto 'Manipulación del Dom' es un ejercicio con la finalidad de aprender la Manipulación del Dom echo en el tecnolgo del sena."></a>
                    <a class="proyecto4" href="https://jonatand05.github.io/Mr_Potato/" data-text="El proyecto 'Mr potato', es un ejercicio con la finalidad de aprender el manejo de capas en css, con la propiedad z-index."></a>
                </div>
                <div class="colproyectos">
                    <a class="proyecto5" href="https://jonatand05.github.io/Veterinaria-y-PetShop/" data-text="El proyecto 'Amigos peludos', fue echo como trabajo para el tegnolgo del sena. Es un diseño echo por mi, con algunas referencias."></a>
                    <a class="proyecto7" href="https://jonatand05.github.io/Web_site_mobile-Scape/" data-text="El proyecto front-end 'CineScape', es un diseño mobile para una aplicación de peliculas con diferentes funcionalidades echo en mi tecnolgo del sena.">proyecto 7</a>
                </div>
            `;
            break;
        case 'BACK-END':
            galeriaPort.innerHTML = `
                Todavia no hay proyecto Backend
            `;
            break;
        case 'FULL-STACK':
            galeriaPort.innerHTML = `
                <div class="colproyectos">
                    <a class="proyecto2" href="https://jonatand05.github.io/web_Site-algoritmos/algoritmos.html" data-text="El proyecto 'Algoritmos con js' es un ejercicio echo con java script puro, el cual tiene funcionalidades de operaciones basicas como suma, promedio de notas, etc.."></a>
                    <a class="proyecto6" href="https://jonatand05.github.io/web_Site_simuladorInversiones/" data-text="El proyecto 'Simulador de inversiones,' fue echo en el tecnolgo con el fin de aplicar algunas funciones de js nuevas en su momento para mi."></a>
                    <a class="proyecto8" href="https://jonatand05.github.io/Calculado_Js/" data-text="El proyecto 'calculadora' como su nombre lo dice, es una calculadora funcionable echa con Java script junto con la funcionalidad de cambio de modo.">proyecto 8</a>
                </div>
            `;
            break;
        default:
            break;
    }
}


//REDES 

function toggleActive2(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    var target = event.target;
    var currentActive = document.querySelector('.boton-redes.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    target.classList.add('active');
    cambiarTarjetas(event); // Corregir el nombre de la función aquí
}

function cambiarTarjetas(event) {
    var opcion = event.target.textContent; 
    var cardsPort = document.querySelector('.cont-cardsRd'); 

    // Limpiar el contenido actual de la galería-port
    cardsPort.innerHTML = '';

    // Agregar el contenido correspondiente según la opción seleccionada
    switch (opcion) {
        case 'PROFECIONALES':
            cardsPort.innerHTML = `
                    <div class="card text-bg-dark cardRd1">
                        <div class="card-img-overlay card-color-overlay">
                            <div class="text-redes">
                                <img src="img/whatsapp_icon.png" alt="">
                                <h2>WHATSAPP</h2>
                            </div>

                            <img class="logo-red" src="img/logo_whatsapp.png" alt="">
                            <p class="card-text">¡Conéctate conmigo directamente a través de WhatsApp para discutir proyectos y colaboraciones!</p>
                            <a href="https://api.whatsapp.com/send?phone=573172310829"><img src="img/next.png" alt=""></a>
                        </div>
                    </div>

                    <div class="card text-bg-dark cardRd1">
                        <div class="card-img-overlay card-color-overlay">

                            <div class="text-redes">
                                <img src="img/linkedin_icon.png" alt="">
                                <h2>LINKEDIN</h2>
                            </div>

                            <img class="logo-red" src="img/linkedin.png" alt="">
                            <p class="card-text">Descubre más sobre mi experiencia y habilidades profesionales en mi perfil de LinkedIn.</p>
                            <a href="www.linkedin.com/in/jonatan-devia-417794300"><img src="img/next.png" alt=""></a>
                        </div>
                    </div>

                    <div class="card text-bg-dark cardRd1">
                        <div class="card-img-overlay card-color-overlay">

                            <div class="text-redes">
                                <img src="img/github_icon.png" alt="">
                                <h2>GIT HUB</h2>
                            </div>

                            <img class="logo-red" src="img/github.png" alt="">
                            <p class="card-text">Explora mis proyectos y contribuciones en mi repositorio de GitHub.</p>
                            <a href="https://github.com/"><img src="img/next.png" alt=""></a>
                        </div>
                    </div>
            `;
            break;
        case 'PERSONALES':
            cardsPort.innerHTML = `
                    <div class="card text-bg-dark cardRd1">
                        <div class="card-img-overlay card-color-overlay">

                            <div class="text-redes">
                                <img src="img/instagram_icon.png" alt="">
                                <h2>INSTAGRAM</h2>
                            </div>

                            <img class="logo-red" src="img/Instagram.png" alt="">
                            <p class="card-text">¡Conéctate conmigo en Instagram para ver las últimas noticias y momentos destacados! </p>
                            <a href="https://www.instagram.com/jonatan.devia.7?igsh=dXVzdjdyNTBiOWd0"><img src="img/next.png" alt=""></a>
                        </div>
                    </div>

                    <div class="card text-bg-dark cardRd1">
                        <div class="card-img-overlay card-color-overlay">

                            <div class="text-redes">
                                <img src="img/faccebok_icon.png" alt="">
                                <h2>FACEBOOK</h2>
                            </div>

                            <img class="logo-red" src="img/facce.png" alt="">
                            <p class="card-text">Encuéntrame en Facebook para mantenernos en contacto y descubre más sobre mí.</p>
                            <a href="https://www.facebook.com/jonatan.devia.7?mibextid=ZbWKwL"><img src="img/next.png" alt=""></a>
                        </div>
                    </div>

                    <div class="card text-bg-dark cardRd1">
                        <div class="card-img-overlay card-color-overlay">

                            <div class="text-redes">
                                <img src="img/discord_icon.png" alt="">
                                <h2>DISCORD</h2>
                            </div>

                            <img class="logo-red" src="img/discord.png" alt="">
                            <p class="card-text">Únete a mi servidor de Discord para participar en discusiones y eventos especiales.</p>
                            <a href="https://discord.com/"><img src="img/next.png" alt=""></a>
                        </div>
                    </div>
            `;
            break;
        default:
            break;
    }
}   

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
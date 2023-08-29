let botonMostrarPokemonAleatorio = document.getElementById("botonMostrarPokemonAleatorio");
botonMostrarPokemonAleatorio.addEventListener("click", mostrarPokemon);

let botonMostrarDetalles = document.getElementById("botonMostrarDetalles");
botonMostrarDetalles.addEventListener("click", mostrarDetalles);

let botonOcultarDetalles = document.getElementById("botonOcultarDetalles");
botonOcultarDetalles.addEventListener("click", ocultarDetalles);

let botonAgregar = document.getElementById("botonAgregar");
botonAgregar.addEventListener("click", agregarAFavoritos);

function mostrarPokemon(){
    let id = Math.floor(Math.random() * 151);
    consultarPokemon(id);
}

function consultarPokemon(id){
    // Creamos un nuevo XMLHttpRequest
    var xhttp = new XMLHttpRequest();

    // Esta es la función que se ejecutará al finalizar la llamada
    xhttp.onreadystatechange = function() {
    // Si nada da error
    if (this.readyState == 4 && this.status == 200) {
        // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
        let resultado = JSON.parse(this.responseText);
        mostrar(resultado);
        console.log(resultado);
    }
    };

    // Endpoint de la API y método que se va a usar para llamar
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    // Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
    xhttp.send(null);
}

function mostrar(objeto){
    let campoNombre = document.getElementById("nombre");
    campoNombre.innerText = "Nombre: " + objeto.name;

    let campoTamano = document.getElementById("tamano");
    campoTamano.innerText = "Estatura: " + objeto.height;

    let campoExperiencia = document.getElementById("experiencia");
    campoExperiencia.innerText = "Experiencia base: " + objeto.base_experience;

    let campoIdentificador = document.getElementById("identificador");
    campoIdentificador.innerText = "Id: " + objeto.id;

    let campoPeso = document.getElementById("peso");
    campoPeso.innerText = "Peso: " + objeto.peso;
}

function mostrarDetalles(){
    let campoId = document.getElementById("identificador");
    let campoPeso = document.getElementById("peso");
    let botonMostrar = document.getElementById("botonMostrarDetalles");
    let botonOcultar = document.getElementById("botonOcultarDetalles");

    campoId.style.display = "block";
    campoPeso.style.display = "block";
    botonMostrar.style.display = "none";
    botonOcultar.style.display = "block";
}

function ocultarDetalles(){
    let campoId = document.getElementById("identificador");
    let campoPeso = document.getElementById("peso");
    let botonMostrar = document.getElementById("botonMostrarDetalles");
    let botonOcultar = document.getElementById("botonOcultarDetalles");

    campoId.style.display = "none";
    campoPeso.style.display = "none";
    botonMostrar.style.display = "block";
    botonOcultar.style.display = "none";
}
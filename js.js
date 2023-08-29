let pokemonActual;

let botonMostrarPokemonAleatorio = document.getElementById("botonMostrarPokemonAleatorio");
botonMostrarPokemonAleatorio.addEventListener("click", consultarPokemon);

let botonAgregarFavoritos = document.getElementById("botonAgregarFavoritos");
botonAgregarFavoritos.addEventListener("click", agregarAFavoritos);

function consultarPokemon(){
    let id = Math.floor(Math.random() * 151);

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let pokemon = JSON.parse(this.responseText);
            pokemonActual = pokemon;
            mostrarPokemon(pokemon);
            console.log(pokemon);
        }
    };

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + id, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send(null);
}

function mostrarPokemon(pokemon){
    
    mostrarMarcoDetalles();
    mostrarImagen(pokemon);
    mostrarNombre(pokemon);
    mostrarAltura(pokemon);
    mostrarPeso(pokemon);
    mostrarExperiencia(pokemon);
    mostrarHabilidades(pokemon);
}

function mostrarMarcoDetalles(){
    document.getElementById("detallesPokemon").style.display = "block";    
}

function mostrarImagen(pokemon){
    document.getElementById("imagen").src = pokemon.sprites.front_default;
    document.getElementById("imagenDetalles").src = pokemon.sprites.front_default;
}

function mostrarNombre(pokemon){
    document.getElementById("nombre").innerText = primeraLetraMayuscula(pokemon.name);
    document.getElementById("nombreDetalles").innerText = primeraLetraMayuscula(pokemon.name);
}

function mostrarAltura(pokemon){
    document.getElementById("altura").innerText = pokemon.height;
}

function mostrarPeso(pokemon){
    document.getElementById("peso").innerText = pokemon.weight;
}

function mostrarExperiencia(pokemon){
    document.getElementById("experiencia").innerText = pokemon.base_experience;
}

function mostrarHabilidades(pokemon){
    let tabla = document.getElementById("habilidades");
    tabla.replaceChildren();
    
    let longitud = pokemon.abilities.length;
    for(let i = 0; i < longitud; i++){
        let fila = document.createElement("tr");
        
        let celda = document.createElement("td");
        celda.className = "table-primary";
        celda.innerText = primeraLetraMayuscula(pokemon.abilities[i].ability.name);        

        fila.appendChild(celda);
        tabla.appendChild(fila);
    }
}

function agregarAFavoritos(){
    document.getElementById("marcoFavoritos").style.display = "block";

    let tabla = document.getElementById("favoritos");

    let fila = document.createElement("tr");
        
    let celdaId = document.createElement("td");
    celdaId.className = "table-primary";
    celdaId.innerText = pokemonActual.id;
    fila.appendChild(celdaId);

    let celdaNombre = document.createElement("td");
    celdaNombre.className = "table-primary";
    celdaNombre.innerText = primeraLetraMayuscula(pokemonActual.name);
    fila.appendChild(celdaNombre);

    let celdaImagen = document.createElement("td");
    celdaImagen.className = "table-primary";
    celdaImagen.innerHTML = "<img src='" + pokemonActual.sprites.front_default + "'>";
    fila.appendChild(celdaImagen);

    tabla.appendChild(fila);
}

function primeraLetraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}
var pelicula = null;
var resultado = null;
var peliculas = [];
var i =0;

function agregarPeliculas(agregar) {
    pelicula = agregar.value;
    //peliculas = new Array();
    //peliculas.uinshift(pelicula);
    peliculas.push(pelicula)
    document.getElementById("resultado").innerHTML += i+"-"+pelicula + "<br/>";
    i++;
    document.getElementById('ingresoPeli').value="";
    mostrarPeliculas(pelicula)
}

function mostrarPeliculas(agregar) {
let x = peliculas.indexOf(agregar)
console.log("mi posicion es: "+x)
}
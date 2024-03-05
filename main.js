alert("Bienvenidos a Recetas de Cocina 2.0");

let nombre = prompt("Por favor, ingrese su identificación");
let recetas = parseInt(prompt("¿Cuántas recetas necesitas?"));
let resetas = {
    italiano: {
        nombre: "Pasta Carbonara",
        ingredientes: ["200g de pasta", "100g de panceta", "2 yemas de huevo", "50g de queso parmesano", "Sal y pimienta"]
    },
    mexicano: {
        nombre: "Guacamole",
        ingredientes: ["2 aguacates", "1 tomate", "1 cebolla", "Cilantro, sal y limón al gusto"]
    },
};

function mostrarReceta(tipo) {
    if (resetas[tipo]) {
        console.log("La receta de " + resetas[tipo].nombre + " es:");
        resetas[tipo].ingredientes.forEach(ingrediente => console.log(ingrediente));
    } else {
        console.log("Lo siento, no tenemos una receta para ese tipo de cocina.");
    }
}

if (recetas >= 5) {
    alert(nombre + ", la cantidad de recetas pedidas es incomprensible");
} else if (recetas > 0 && recetas <= 2) {
    let tipos = prompt("Ingrese qué tipo de comida necesita la receta");
    mostrarReceta(tipos);
} else {
    alert(nombre + ", la cantidad de recetas ingresada no es válida");
}

function mostrarReceta(tipo) {
    console.log("La receta de " + tipo + " es: ");
    console.log("200g de lentejas listas");
    console.log("½ zapallo cocido al horno");
    console.log("1 huevo");
    console.log("2Cdas de Yogur Ser Natural sin endulzar");
    console.log("2Cdas de almidón de maíz Sal y pimienta");
    console.log("2Cdas de aceite de oliva");
    console.log("1 taza de pan rallado");
}

if (recetas >= 5) {
    alert(nombre + ", la cantidad de recetas pedidas es incomprensible");
} else if (recetas > 0 && recetas <= 2) {
    let tipos = prompt("Ingrese qué tipo de comida necesita la receta");
    mostrarReceta(tipos);
} else {
    alert(nombre + ", la cantidad de recetas ingresada no es válida");
}
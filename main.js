alert("Bienvenidos a Recetas de Cocina 2.0");

let nombre = prompt("Por favor, ingrese su identificación");
let cantidadRecetas = parseInt(prompt("¿Cuántas recetas necesita?"));

// Variables para cantidades de ingredientes
let cantidadIngredientes = {
    lentejas: "200g",
    zapallo: "½",
    huevo: "1",
    yogur: "2 cucharadas",
    almidon: "2 cucharadas",
    aceite: "2 cucharadas",
    panRallado: "1 taza"
};

// Arrays para categorías de ingredientes
let categoriasIngredientes = {
    verduras: ["zapallo cocido al horno"],
    legumbres: ["lentejas cocidas"],
    huevosDairy: ["huevo", "Yogur Ser Natural sin endulzar"],
    condimentos: ["sal", "pimienta"],
    otros: ["almidón de maíz", "aceite de oliva", "pan rallado"]
};

// Definición de objetos para las recetas
let recetas = {
    italiano: {
        nombre: "Pasta Carbonara",
        ingredientes: [
            { nombre: "pasta", cantidad: "200g" },
            { nombre: "panceta", cantidad: "100g" },
            { nombre: "yemas de huevo", cantidad: "2" },
            { nombre: "queso parmesano", cantidad: "50g" },
            { nombre: "sal", cantidad: "al gusto" },
            { nombre: "pimienta", cantidad: "al gusto" }
        ]
    },
    mexicano: {
        nombre: "Guacamole",
        ingredientes: [
            { nombre: "aguacates", cantidad: "2" },
            { nombre: "tomate", cantidad: "1" },
            { nombre: "cebolla", cantidad: "1" },
            { nombre: "cilantro", cantidad: "al gusto" },
            { nombre: "sal", cantidad: "al gusto" },
            { nombre: "limón", cantidad: "al gusto" }
        ]
    },
    vegetariano: {
        nombre: "Hamburguesa de Lentejas",
        ingredientes: [
            { nombre: "lentejas cocidas", cantidad: "200g" },
            { nombre: "zapallo cocido al horno", cantidad: "½" },
            { nombre: "huevo", cantidad: "1" },
            { nombre: "Yogur Ser Natural sin endulzar", cantidad: "2 cucharadas" },
            { nombre: "almidón de maíz", cantidad: "2 cucharadas" },
            { nombre: "aceite de oliva", cantidad: "2 cucharadas" },
            { nombre: "pan rallado", cantidad: "1 taza" },
            { nombre: "sal", cantidad: "al gusto" },
            { nombre: "pimienta", cantidad: "al gusto" }
        ]
    }
};

// Función para mostrar una receta
function mostrarReceta(tipo) {
    let receta = recetas[tipo];
    if (receta) {
        console.log("La receta de " + receta.nombre + " es:");
        receta.ingredientes.forEach(ingrediente => console.log(ingrediente.cantidad + " de " + ingrediente.nombre));
    } else {
        console.log("Lo siento, no tenemos una receta para ese tipo de cocina.");
    }
}

// Validar la cantidad de recetas
if (cantidadRecetas >= 5) {
    alert(nombre + ", la cantidad de recetas pedidas es incomprensible");
} else if (cantidadRecetas > 0 && cantidadRecetas <= 2) {
    let tipoReceta = prompt("Ingrese qué tipo de comida necesita la receta (italiano, mexicano o vegetariano)");
    mostrarReceta(tipoReceta);
} else {
    alert(nombre + ", la cantidad de recetas ingresada no es válida");
}
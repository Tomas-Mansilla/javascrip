
let storedRecipes = localStorage.getItem('recetas');
let recetas = storedRecipes ? JSON.parse(storedRecipes) : {
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

document.getElementById('mostrarRecetaBtn').addEventListener('click', function() {
    let tipoReceta = document.getElementById('tipoReceta').value;
    mostrarRecetaEnDOM(tipoReceta);
});

function mostrarRecetaEnDOM(tipo) {
    let receta = recetas[tipo];
    if (receta) {
        let recetaContainer = document.getElementById('recetaContainer');
        recetaContainer.innerHTML = ''; 
        let titulo = document.createElement('h2');
        titulo.textContent = "La receta de " + receta.nombre + " es:";
        recetaContainer.appendChild(titulo);
        let listaIngredientes = document.createElement('ul');
        receta.ingredientes.forEach(ingrediente => {
            let item = document.createElement('li');
            item.textContent = ingrediente.cantidad + " de " + ingrediente.nombre;
            listaIngredientes.appendChild(item);
        });
        recetaContainer.appendChild(listaIngredientes);
    } else {
        alert("Lo siento, no tenemos una receta para ese tipo de cocina.");
    }
}


document.getElementById('guardarPreferenciasBtn').addEventListener('click', function() {
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    localStorage.setItem('nombreUsuario', nombreUsuario);
});


let storedUserName = localStorage.getItem('nombreUsuario');
if (storedUserName) {
    document.getElementById('nombreUsuario').value = storedUserName;
}


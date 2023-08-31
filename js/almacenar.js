const botonAgregar = document.getElementById('agregar')
const contenedor = document.getElementById('contenedor')
const texto = document.getElementById('item')
const botonLimpiar = document.getElementById('limpiar')
let items = JSON.parse(localStorage.getItem("data")) || [];

botonAgregar.addEventListener("click", function() {
    let lista = texto.value.trim(); 
    if (lista !== "") { 
        items.push(lista);
        localStorage.setItem("data", JSON.stringify(items));
        escribirlista(items);
        texto.value = " "; 
    }
});

function escribirlista(items) {
    let htmlContentToAppend = "";
    items.forEach(elm => {
        htmlContentToAppend +=
            `<ul> 
            ${elm}
        </ul>
        `
        contenedor.innerHTML = htmlContentToAppend;
    })
}

botonLimpiar.addEventListener("click", function(){
    localStorage.clear();
    items = [];
    contenedor.innerHTML = " ";
});


escribirlista(items);


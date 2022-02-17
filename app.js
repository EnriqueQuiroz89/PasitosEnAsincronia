console.log("Hola mundo");
let productos = [
    {
        nombre: "Ordenador Gaming",
        marca: "Asus",
        precio: 1200
    },
    {
        nombre: "Tablet",
        marca: "Samsung",
        precio: 800
    },
    {
        nombre: "Camara Reflex",
        marca: "Cannon",
        precio: 650
    },
];

function conseguirProductos() {
    return new Promise((resolve, reject) => {
        console.log("Cargando productos");

        setTimeout(() => {
            resolve(productos);
            reject(Error("Ha ocurrido un error"));
        }, 3500);
    });
}

// ERROR
// Llama a la funcion que devuelve una promesa de forma sincrona
/** 
 * conseguirProductos(); 
 * */

// ACIERTO
// Usamos el .then para indicarle al programa que esperamos una promesa 
// Y que siga su curso.
/** 
conseguirProductos().then(datos => { console.log(datos) });
*/

// USO ASINC AWAIT
// Llamadoo incorrecto de una funcion que devuelbe una promesa.
/**
let misProductos = await conseguirProductos();
console.log(misProductos);  */
//LLamado correcto de una funcion que devuelve una promesa
async function getMisProductos() {
    let misProductos = await conseguirProductos();
    console.log(misProductos);
    window.alert(misProductos);
}

getMisProductos();
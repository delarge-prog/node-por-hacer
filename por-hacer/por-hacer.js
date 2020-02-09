const fs = require('fs');

let listadoPorHacer = [];

let guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}
const borrar = (descripcion) => {
    cargarDB();
    console.log(descripcion)
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    console.log(nuevoListado);
    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    }
    listadoPorHacer = nuevoListado;
    guardarDB();
    return true;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    console.log(descripcion)
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(index)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        console.log(listadoPorHacer[index])
        guardarDB();
        return true;
    } else {
        return false;
    }

}
const listar = (completado) => {
    console.log(completado)
    cargarDB();
    if (completado === 'false') {
        let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado === !completado);
        listadoPorHacer = nuevoListado;
        return listadoPorHacer;
    } else {
        let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado === completado);

        listadoPorHacer = nuevoListado;
        return listadoPorHacer;
    }

}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}



module.exports = {
    crear,
    guardarDB,
    actualizar,
    listar,
    borrar
}
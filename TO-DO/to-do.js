const fs = require('fs');
const colors = require('colors');
const fichero = './data/data.txt'

let listadoPorHacer = [];

const saveDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./DB/data.json`, data, (err) => {
        if (err) {
            console.log('Error al grabar DB', err);
            throw new Error('No se pudo guardar DB', err);
        } else {
            console.log('Data guardada correctamente');
        }

    });
}

const readDB = () => {
    try {
        listadoPorHacer = require(`../DB/data.json`);
        console.log(listadoPorHacer);

    } catch (err) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    readDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    readDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    saveDB();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    readDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        saveDB();
        return listadoPorHacer[index];
    } else {
        throw new Error('No existe tarea');
    }
}

const borrar = (descripcion) => {

    readDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        saveDB();
        return listadoPorHacer;
    } else {
        throw new Error('No existe tarea');
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
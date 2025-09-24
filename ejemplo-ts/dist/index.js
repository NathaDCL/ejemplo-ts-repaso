"use strict";
function crearUsuario(Datos) {
    return {
        id: Date.now(),
        nombre: Datos.nombre,
        email: Datos.email,
        edad: Datos.edad,
        activo: Datos.activo,
        FechaCreacion: new Date()
    };
}
const DatosDeEntrada = {
    nombre: "Ana García",
    email: "ana@gmail.com",
    edad: 28,
    activo: true
};
const NuevoUsuario = crearUsuario(DatosDeEntrada);
console.log("Usuario Creado:");
console.log(NuevoUsuario);
console.log(`ID: ${NuevoUsuario.id}`);
console.log(`Nombre: ${NuevoUsuario.nombre}`);
console.log(`Email: ${NuevoUsuario.email}`);
console.log(`Fecha de Creacion: ${NuevoUsuario.FechaCreacion}`);

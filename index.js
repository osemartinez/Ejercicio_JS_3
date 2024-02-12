const km = document.getElementById("km");
const m = document.getElementById("m");
const ft = document.getElementById("ft");
const yd = document.getElementById("yd");
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const resultado3 = document.getElementById("resultado3");
const resultado4 = document.getElementById("resultado4");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const limpiar1 = document.getElementById("limpiar1");
const limpiar2 = document.getElementById("limpiar2");
const limpiar3 = document.getElementById("limpiar3");
const limpiar4 = document.getElementById("limpiar4");



function convertirKmAM() {
    let valor = km.value;
    if (valor > 0) {
        let conversion = valor * 1000;
        resultado1.innerHTML = valor + " Kilómetros son " + conversion + " Metros ";
    } else {
        resultado1.innerHTML = " Ingrese un número válido ";
    }
}

function convertirMACm() {
    let valor = m.value;
    if (valor > 0) {
        let conversion = valor * 100;
        resultado2.innerHTML = valor + " Metros son " + conversion + " Centímetros ";
    } else {
        resultado2.innerHTML = " Ingrese un número válido ";
    }
}


function convertirFtAPulg() {
    let valor = ft.value;
    if (valor > 0) {
        let conversion = valor * 12;
        resultado3.innerHTML = valor + " Pies son " + conversion + " Pulgadas ";
    } else {
        resultado3.innerHTML = " Ingrese un número válido ";
    }
}


function convertirYdAPulg() {
    let valor = yd.value;
    if (valor > 0) {
        let conversion = valor * 36;
        resultado4.innerHTML = valor + " Yardas son " + conversion + " Pulgadas ";
    } else {
        resultado4.innerHTML = " Ingrese un número válido ";
    }
}


function limpiarCampos() {
    km.value = "";
    m.value = "";
    ft.value = "";
    yd.value = "";
    resultado1.innerHTML = "";
    resultado2.innerHTML = "";
    resultado3.innerHTML = "";
    resultado4.innerHTML = "";
}


boton1.addEventListener("click", convertirKmAM);
boton2.addEventListener("click", convertirMACm);
boton3.addEventListener("click", convertirFtAPulg);
boton4.addEventListener("click", convertirYdAPulg);
limpiar1.addEventListener("click", limpiarCampos);
limpiar2.addEventListener("click", limpiarCampos);
limpiar3.addEventListener("click", limpiarCampos);
limpiar4.addEventListener("click", limpiarCampos);
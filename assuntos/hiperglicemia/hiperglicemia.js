const peso = document.getElementById("peso_hipergl");
const dose = document.getElementById("insul_hipergl");
const campos = document.getElementsByTagName("input");
const vel_infusao = document.getElementById("vel_infusao");

function limpar(){
    for(var i=0; i < campos.length; i++){
        campos[i].value = "";
    }

    vel_infusao.textContent = "0,0mL/h";
}

function calcular(){
    let p = parseFloat(peso.value.replace(",","."));
    let dose_insulina = parseFloat(dose.value.replace(",","."));
    console.log(dose_insulina);
    let resultado = p * dose_insulina/0.01;

    vel_infusao.textContent = resultado.toFixed(1).replace(".", ",") + "mL/h";
}
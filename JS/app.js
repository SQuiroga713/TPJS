

function calcular() {
var cant=parseInt(document.getElementById("cantidad"))
var categ=document.getElementById("categoria")
var total=0

if (categ.toLowerCase() == "estudiante") {
    total=200*cant*0.2
}

if (categ.toLowerCase() == "trainee") {
    total=200*cant*0.5
}
if (categ.toLowerCase() == "junior") {
    total=200*cant*0.85
}

document.getElementById("pagar").innerHTML=total;

}
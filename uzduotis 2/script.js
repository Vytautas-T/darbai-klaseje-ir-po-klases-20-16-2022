window.onload = function() {
    let pirmasLaukelis = document.getElementById("pirmasLaukelis")
    let antrasLaukelis = document.getElementById("antrasLaukelis")
    let mygtukas = document.getElementById("mygtukas")
    let pastraipa = document.getElementById("pastraipa")

    mygtukas.onclick = function() {
        let pirmas = pirmasLaukelis.valueAsNumber;
        let antras = antrasLaukelis.valueAsNumber;

        pastraipa.innerHTML = "suskaiciuotas laipsnis yra " + suskaiciuotasLaipsnis(pirmas,antras);
    }
}

function suskaiciuotasLaipsnis(a,b){
    return Math.pow(a,b)
}
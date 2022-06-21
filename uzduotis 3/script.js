window.onload = function() {
    let pirmasSkaiciausLaukelis = document.getElementById("pirmasLaukelis")
    let antrasSkaiciausLaukelis = document.getElementById("antrasLaukelis")
    let patikrinimoMygtukas = document.getElementById("mygtukas")
    let isvedimoPastraipa = document.getElementById("pastraipa")

    patikrinimoMygtukas.onclick = function() {
        let pirmas = pirmasSkaiciausLaukelis.valueAsNumber;
        let antras = antrasSkaiciausLaukelis.valueAsNumber;
        isvedimoPastraipa.innerHTML = "didesnis skaicius yra " + didesnisSkaicius(pirmas,antras)
    }
}

function didesnisSkaicius(a,b) {
    if (a > b) {
        return a;
        
    } else {
        return b;
    }
}
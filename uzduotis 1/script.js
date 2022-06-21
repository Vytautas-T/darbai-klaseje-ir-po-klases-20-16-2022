window.onload = function() {
    let ilgioLaukelis = document.getElementById("ilgis");
    let plotcioLaukelis = document.getElementById("plotis");
    let mygtukas = document.getElementById("skaiciavimoMygtukas");
    let pastraipa = document.getElementById("rezultatoPastraipa");
    mygtukas.onclick = function() {
        let ilgis = ilgioLaukelis.valueAsNumber;

        let plotis = plotcioLaukelis.valueAsNumber;

        pastraipa.innerHTML = "plotis yra " + staciakampioPlotas(ilgis,plotis)
    }
}

function staciakampioPlotas(a,b) {
    return a * b;
}
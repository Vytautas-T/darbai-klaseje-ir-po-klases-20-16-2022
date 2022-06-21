window.onload = function() {
    let pirmasLaukelis = document.getElementById("text1");

    let antrasLaukelis = document.getElementById("text2");

    let mygtukas = document.getElementById("paleidimoMygtukas");

    let rezultatoPastraipa = document.getElementById("pastraipa");

    mygtukas.onclick = function() {
        let pirmas = pirmasLaukelis.value;
        let antras = antrasLaukelis.value;

        rezultatoPastraipa.innerHTML = "ilgesnis zodis arba lygus yra - " + ilgesnisZodis(pirmas, antras)
    }
}

function ilgesnisZodis(a, b) {
    if (a.length > b.length) {
        return a;
        
    } 
    if (a.length = b.length) {
        return "zodiziai yra lygus";
        
    }else {
        return b;
    }
}
window.onload = function() {
    let pirmas = document.getElementById("a");
    let antras = document.getElementById("b");
    let trecias = document.getElementById("c");
    console.log(antras,trecias,pirmas)
    let mygtukas = document.getElementById("apskaiciavimoMygtukas");
    let pastraipas = document.getElementById("pastraipa")

    mygtukas.onclick = function() {
        let primasLaukelis = pirmas.value;
        let antrasLaukelis = antras.value;
        let treciasLaukelis = trecias.value;
        
        pastraipas.innerHTML = apskaiciavimas(primasLaukelis,antrasLaukelis,treciasLaukelis);
        console.log(apskaiciavimas(primasLaukelis,antrasLaukelis.treciasLaukelis))

    }
}

function apskaiciavimas(a,b,c) {
    let saknis1, saknis2;
    let D = b * b - 4 * a * c;
        if (D > 0) {
            saknis1 = (-b + Math.sqrt(D)) / (2 * a);
            saknis2 = (-b - Math.sqrt(D)) / (2 * a);

            return "lygties saknis yra", saknis1, "ir", saknis2;
        }
        if (D == 0) {
            saknis1 = saknis2 = -b / (2 * a);
            
            return "lygties saknis yra", saknis1, "ir", saknis2;
        }else{
            return "saknu nera";
        }
    }

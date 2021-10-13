function feltolt() {
    let hozzaad = document.createElement("li");

    let pipa = document.createElement("input");
    pipa.setAttribute("type", "checkbox");
    pipa.setAttribute("id","check");
    pipa.setAttribute("class","pipa");
    pipa.addEventListener("click", pipa);

    let txt = document.createElement("label");
    txt.innerHTML = document.getElementById("bevitel").value;
    txt.setAttribute("class","txt");

    let gomb = document.createElement("text");
    gomb.addEventListener("click", torol);
    gomb.innerHTML = "X";

    hozzaad.appendChild(pipa);
    hozzaad.appendChild(txt);
    hozzaad.appendChild(gomb);
    
    document.getElementById("lista").appendChild(hozzaad);

    //bekell fejezni
   /* function athuz(){
        hozzaad.setAttribute("class","athuzva");
    }

    if (document.getElementById('check').checked) {
        athuz();
    }*/
}

function mezoUres() {
    document.getElementById("bevitel").value = "";
}


function init() {
    document.getElementById("gomb").addEventListener("click", katt);
}

function katt() {
    feltolt();
    mezoUres();
}

function torol(cel) {
    cel.target.parentNode.remove();
}



document.addEventListener("DOMContentLoaded", init);
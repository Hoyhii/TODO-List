function feltolt() {
    let bevitel = document.getElementById("bevitel").value;

    if (bevitel.trim()=="") {
        alert("nem lehet üres!");
        return;
    }else{
        
        let hozzaad = document.createElement("div");
        let pipa = document.createElement("input");
        pipa.setAttribute("type", "checkbox");
        pipa.setAttribute("id","check");
        pipa.setAttribute("class","pipaa");
        pipa.addEventListener("click", pipa);
        pipa.addEventListener("click",athuz);

        let txt = document.createElement("label");
        txt.innerHTML = document.getElementById("bevitel").value;
        txt.setAttribute("class","txt");

        let gomb = document.createElement("text");
        gomb.setAttribute("class","torles");
        gomb.addEventListener("click", torol);
        gomb.innerHTML = "X";

        hozzaad.appendChild(pipa);
        hozzaad.appendChild(txt);
        hozzaad.appendChild(gomb);
        
        document.getElementById("lista").appendChild(hozzaad);
    }

}

function athuz(e){
    let text = e.target.parentNode.getElementsByTagName("label")[0];
    text.classList.toggle("athuzva");
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
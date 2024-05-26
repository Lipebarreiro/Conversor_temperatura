var div = (document.getElementById("resp"));

function converter() {

    let valor = parseFloat(document.getElementById("valor").value);
    let esc = document.getElementById("escala").value;
    let text;

    switch (esc) {

        case "kel":
            text = `<p> ${valor + 273.15} </p>`;
            break;
        default:
            text = `<p> ${(valor * 1.8) + 32}  </p>`;

    }
    div.innerHTML = text;
}



function mudar(){
   //variáveis
    const red = document.querySelectorAll("#red, #green, #blue");
    let div = document.getElementById("di");

    //mudar a div
    div.style.backgroundColor = `rgb( ${red[0].value }, ${red[1].value}, ${red[2].value})`;
    div.style.color = `rgb( ${red[0].value}, ${red[1].value}, ${red[2].value})`;

    var x = document.querySelectorAll("#red, #green, #blue")
    x = `${red[0].value}`;
    var y = `${red[1].value}`;
    var z = `${red[2].value}`;

    document.getElementById("valor-red").value = x;
    document.getElementById("valor-blue").value = y;
    document.getElementById("valor-gree").value = z;
}

const dds = 0;
var ll = 0;
let pp = 0;

let contador = 0;

function cambio(){
    let p = document.getElementById("p1");
    console.log(p)
    p.innerHTML = "<p>BIENVENIDOS</p>";
    const div = document.getElementById("contenedor");
    let cadena = `<section>
                <header><h1>Encabezado</h1></header>
                <p>lorem impsum</p>
                <footer><span>Datos de Contacto</span></footer>
                </section>`;

    div.innerHTML = cadena;
    p.style.background = "#34f21a";
}
function cambio2(){
    let p = document.getElementById("p1");
    const enc = document.getElementById("enc");
    p.textContent = "<p>BIENVENIDOS</p>";
    p.style.background = "blue";
    const parrafos = document.getElementsByTagName("p");
    console.log(parrafos);
    let header = document.createElement("header");
    let headerTxt = document.createTextNode(enc.value);
    header.setAttribute("id","encabezado"+contador);
    header.setAttribute("class","encabezados");
    header.addEventListener("click",cambio2);
    header.appendChild(headerTxt);
    document.body.appendChild(header);
    contador+=1;  
}
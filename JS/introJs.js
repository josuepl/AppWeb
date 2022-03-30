var variable;
let variableLet;
const variableConst = 9.81;
/*
alert("la variable contiene: "+ variable)
variable = "TEXTO"
alert("la variable contiene: "+ variable)
variable = true
alert("la variable contiene: "+ variable)*/
console.log(variableConst)

let sinAlcance = 10;
{
    let sinAlcance = 20;
}
console.log(`sinAlcance : ${sinAlcance}`)

function prueba1(){
    let nombre = prompt("Ingresa tu nombre")
    if(nombre =="josue"){
        console.log("Bienvenido Josue");
        let encabezado = 
        document.write()
    }
}




function prueba(){
    console.log(variableConst);
    let texto1 = "Hola Mundo";
    let encabezado = "<header>"+ texto1 +"</header>";
    let texto2 = "APPWeb";
    let parrafo = `<p>Este es el curso de ${texto2} espero que funcione ...</p>`;
    let tarjeta = 
    `<article class="tarjeta">
    <header class="myHeader"><h1>León</h1></header>
    <div class="myContenido">
        <h2>Descripción</h2>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, architecto minus? Est nemo cum provident ipsam molestiae explicabo eum unde, ut nesciunt minima voluptas adipisci atque. Inventore fugit reprehenderit modi!</p>
    </div>
    <div class="myImg">
       <img  src="https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Le%C3%B3n-2.jpg" alt="Leon" srcset="https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Le%C3%B3n-2.jpg">
    </div>`;

    document.write(encabezado +" Bienvenidos a "+parrafo + tarjeta)
}
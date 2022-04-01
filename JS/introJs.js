var variable;
let variableLet;
const variableConst = 9.81;
/*
alert("la variable contiene: "+ variable)
variable = "TEXTO"
alert("la variable contiene: "+ variable)
variable = true
alert("la variable contiene: "+ variable)*/
//console.log(variableConst)

function ciclos(){
    for(let contador=0; contador < 10; contador++){
        console.log(`El valor de contador es: ${contador}`);
    }
    let opc;
    do{
        opc = prompt("Ingresa tu nombre");
    }while(opc != 'josue');

    let numeros = [5,7,8,9];
    for(let numero in numeros){
        console.log(`El numero obtenido es ${numero}`);
    }
    for(let numero of numeros){
        console.log(`El numero obtenido es ${numero}`);
    } 

}

let sinAlcance = 10;
{
    let sinAlcance = 20;
}
console.log(`sinAlcance : ${sinAlcance}`)

//ciclos()

function manejoDeArreglos(){
    let dias = ["lunes","martes", "miercoles","jueves","viernes"];
    console.log(`Los dias de la semana son: ${dias} -> estan dentro de un arreglo`);
    console.log("Los dias de la semana son: "+ dias + " -> estan dentro de un arreglo");
    console.log(`${dias[0]}`);
    dias.forEach( (element, index) => {
    console.log(element, index);        
    });
    dias.push("sabado");
    console.log(`Los dias de la semana son: ${dias} -> estan dentro de un arreglo`);
    let diaRes= dias.pop();
    console.log("diaRes: " + diaRes);
    console.log(`Los dias de la semana son: ${dias} -> estan dentro de un arreglo`);
    dias.unshift("domingo");
    console.log(`Los dias de la semana son: ${dias} -> estan dentro de un arreglo`);
    diaRes = dias.shift()
    console.log("diaRes: " + diaRes);
    console.log(`Los dias de la semana son: ${dias} -> estan dentro de un arreglo`);
    posicion = dias.indexOf('miercoles');    
}

function prueba1(){
    let nombre = prompt("Ingresa tu nombre")
    if(nombre =="josue"){
        console.log(`Bienvenido ${nombre}`);
        let encabezado = `<header><h1>Bienvenido ${nombre}</h1></header>`;
        document.write(encabezado)
    }
    else if(nombre == 'pepe'){
        console.log(`HOLA ${nombre}`);
        let encabezado = `<header><h1>HOLA ${nombre}</h1></header>`;
        document.write(encabezado)
    }
    else{
        nombre = 'Invitado'
        console.log(`Bienvenido ${nombre}`);
        let encabezado = `<header><h1>Bienvenido ${nombre}</h1></header>`;
        document.write(encabezado)
    }
    validaOpcion()
}

function validaOpcion(){
    let menu = 
    `1) Evaluar \n
     2) Ordenar \n
     3) Comprar \n
    `;

    let opc = prompt("Elije algunas de las siguientes opciones: " +menu);
    console.log(opc);
    switch(opc){
        case '1':
            console.log("Has elegido evaluar");
            break;
        case '2':
            console.log("Has elegido Ordenar");
            break;
        case '3':
            console.log("Has elegido Comprar");
            break;
        default:
            console.log("Opcion no valida");
            break;
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
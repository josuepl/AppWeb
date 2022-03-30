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
function prueba(){
    console.log(variableConst);
    let texto1 = "Hola Mundo";
    let encabezado = "<header>"+ texto1 +"</header>"
    let texto2 = "APPWeb";
    document.write(encabezado +" Bienvenidos a "+texto2)
}
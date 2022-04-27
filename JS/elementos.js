function btnUno(){
    console.log("Uno");
    let nombre = document.getElementById("nombreUsr");
    let passwd = document.getElementById("passwdUsr");
    let email = document.getElementById("emailUsr");
    let comentario = document.getElementById("comentarioUsr");
    let listaMenu = [];
    let opcion1 = document.getElementById("menu1");
    console.log(`OPCION1: ${opcion1}, valor: ${opcion1.value} checked: ${opcion1.checked}`);
    listaMenu.push(document.getElementById("menu1"));
    listaMenu.push(document.getElementById("menu2"));
    listaMenu.push(document.getElementById("menu3"));
    listaMenu.push(document.getElementById("menu4"));
    listaMenu.push(document.getElementById("menu5"));
    console.log(listaMenu);
    for(let item of listaMenu){
        console.log(`item: ${item.value} checked: ${item.checked}`);
    }
    console.log(nombre.value);
    console.log(passwd.value);
    console.log(email.value);
    console.log(comentario.value);
}

function btnDos(){
    console.log("Dos");
    let nombre = document.getElementById("nombreUsr");
    let passwd = document.getElementById("passwdUsr");
    let email = document.getElementById("emailUsr");
    let comentario = document.getElementById("comentarioUsr");
    nombre.value = "JOSUE PEREZ LUCERO";
    passwd.value = "contrasena";
    email.value = "josue@josue.pl";
    comentario.value = "hola mundo x100";
    console.log(nombre.value);
    console.log(passwd.value);
    console.log(email.value);
    console.log(comentario.value);
}
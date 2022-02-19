/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encriptar(){
    var texto1 = document.querySelector("#input-texto").value;
    textoe = texto1.replace(/[e]/gi,"enter").replace(/[i]/gi,"imes").replace(/[a]/gi,"ai").replace(/[o]/gi,"ober").replace(/[u]/gi,"ufat");
    document.querySelector("#msg").value = textoe;
}

function desencriptar(){
    var texto2 = document.querySelector("#input-texto").value;
    textode = texto2.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    document.querySelector("#msg").value = textode;
}

boton3 = document.querySelector("#btn-copy");
boton3.onclick = copiar;
cajita = document.querySelector("#msg");

function copiar(){
    cajita.focus();
    document.execCommand("selectall");
    document.execCommand("copy");
}



boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;
boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;











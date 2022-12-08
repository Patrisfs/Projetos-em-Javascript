var btn = document.querySelector("#converter");
var bin = document.querySelector("#inserir");
var resul = document.querySelector("#resul");

function converte(){
    var bin1 = bin.value;
    var dec = parseInt(bin1, 2);
    return dec;
};
btn.addEventListener("click", function(){
    var dec =converte(); 
    resul.value = dec
});

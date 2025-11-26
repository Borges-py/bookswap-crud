document.getElementById("enviar").addEventListener("click", function(){
    armazenar();
    window.location.href = "index.html";
});

document.getElementById("voltar").addEventListener("click", function(){
    window.location.href = "index.html";
});

function armazenar(){
    var listaCupom = JSON.parse(localStorage.getItem("listaCupom")) || [];
    var obj = {nome: "", aniversario: "", desconto:"", limit:"", parceiro: "", dtInicio: "", dtVenc:""};
    obj.nome = document.getElementById("nome").value;
    obj.parceiro = document.getElementById("parceiro").value;
    obj.desconto = document.getElementById("desconto").value;
    obj.limit = document.getElementById("limit").value;
    obj.dtInicio = document.getElementById("dtInicio").value;
    obj.dtVenc = document.getElementById("dtVenc").value;
    obj.aniversario = document.getElementById("aniversario").value;
    listaCupom.push(obj);
    localStorage.setItem("listaCupom",JSON.stringify(listaCupom));    
}
document.getElementById("enviar").addEventListener("click", function(){
    armazenar();
    window.location.href = "index.html";
});

document.getElementById("voltar").addEventListener("click", function(){
    window.location.href = "index.html";
});

function armazenar(){
    var listaParceiro = JSON.parse(localStorage.getItem("listaParceiro")) || [];
    var obj = {nome: "", email:"", phone:"", tipo: "", cnpj: ""};
    obj.nome = document.getElementById("nome").value;
    obj.tipo = document.getElementById("tipo").value;
    obj.email = document.getElementById("email").value;
    obj.phone = document.getElementById("phone").value;
    obj.cnpj = document.getElementById("cnpj").value;
    listaParceiro.push(obj);
    localStorage.setItem("listaParceiro",JSON.stringify(listaParceiro));    
}
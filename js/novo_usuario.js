document.getElementById("enviar").addEventListener("click", function(){
    armazenar();
    window.location.href = "index.html";
});

document.getElementById("voltar").addEventListener("click", function(){
    window.location.href = "index.html";
});

function armazenar(){
    var listaUsuario = JSON.parse(localStorage.getItem("listaUsuario")) || [];
    var obj = {nome: "", email:"", phone:"", nasc: "", cpf: ""};
    obj.nome = document.getElementById("nome").value;
    obj.nasc = document.getElementById("nasc").value;
    obj.email = document.getElementById("email").value;
    obj.phone = document.getElementById("phone").value;
    obj.cpf = document.getElementById("cpf").value;
    listaUsuario.push(obj);
    localStorage.setItem("listaUsuario",JSON.stringify(listaUsuario));    
}
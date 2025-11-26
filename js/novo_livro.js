document.getElementById("enviar").addEventListener("click", function(){
    armazenar();
    window.location.href = "index.html";
});

document.getElementById("voltar").addEventListener("click", function(){
    window.location.href = "index.html";
});

function armazenar(){
    var listaLivro = JSON.parse(localStorage.getItem("listaLivro")) || [];
    var obj = {nome: "", autor:"", genero:"", isbn: "", idioma: ""};
    obj.nome = document.getElementById("nome").value;
    obj.isbn = document.getElementById("isbn").value;
    obj.autor = document.getElementById("autor").value;
    obj.genero = document.getElementById("genero").value;
    obj.idioma = document.getElementById("idioma").value;
    listaLivro.push(obj);
    localStorage.setItem("listaLivro",JSON.stringify(listaLivro));    
}
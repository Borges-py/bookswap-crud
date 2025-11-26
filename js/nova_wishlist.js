document.getElementById("enviar").addEventListener("click", function(){
    armazenar();
    window.location.href = "index.html";
});

document.getElementById("voltar").addEventListener("click", function(){
    window.location.href = "index.html";
});

function armazenar(){
    var listaWishlist = JSON.parse(localStorage.getItem("listaWishlist")) || [];
    var obj = {nome: "", autor:"", editora:"", isbn: "", idioma: ""};
    obj.nome = document.getElementById("nome").value;
    obj.isbn = document.getElementById("isbn").value;
    obj.autor = document.getElementById("autor").value;
    obj.editora = document.getElementById("editora").value;
    obj.idioma = document.getElementById("idioma").value;
    listaWishlist.push(obj);
    localStorage.setItem("listaWishlist",JSON.stringify(listaWishlist));    
}
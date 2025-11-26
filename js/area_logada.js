let usuario = localStorage.getItem("usuario");
if (!usuario) {
    window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("btn-usuario").addEventListener("click", function(){
      window.location.href = "../usuario/index.html";
  });

  document.getElementById("btn-livro").addEventListener("click", function(){
      window.location.href = "../livro/index.html";
  });

  document.getElementById("btn-parceiro").addEventListener("click", function(){
      window.location.href = "../parceiro/index.html";
  });

  document.getElementById("btn-cupom").addEventListener("click", function(){
      window.location.href = "../cupom/index.html";
  });

  document.getElementById("btn-wishlist").addEventListener("click", function(){
      window.location.href = "../wishlist/index.html";
  });

});



usuario = JSON.parse(usuario);
document.getElementById("bem-vindo").innerHTML = "Bem vindo, " + usuario + "!";


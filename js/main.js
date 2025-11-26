document.getElementById("entrar").addEventListener(
    'click', function(){
        login();
    }
);

async function login(){
    var login = "";
    var senha = "";
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;

    //Criando um formulario no javascript
    const fd = new FormData();
    fd.append('login', login);
    fd.append('senha', senha);

    const retorno = await fetch('php/back.php',
        {
            method: 'POST',
            body: fd

        }
    );

    const resposta = await retorno.json();

    

    if (resposta.value) {
        if (resposta.usuario) {
            localStorage.setItem("usuario", JSON.stringify(resposta.usuario));
        }
        window.location.href = "area_logada/index.html?id=" + resposta.id;
    } else {
        alert(resposta.msg);
    }
}
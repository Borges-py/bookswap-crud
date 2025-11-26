document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        window.location.href = '../index.html';
    }else{
        carregaItens();
    }    
});

document.getElementById("novo").addEventListener("click", function(){
    window.location.href = "novo_usuario.html";
});

document.getElementById("voltar").addEventListener("click", function(){
    window.location.href = "../area_logada/index.html";
});

function validaSessao(){
    if(localStorage.getItem("usuario")){
        return true;
    }else{
        return false;
    }
}

function carregaItens(){
        if(localStorage.getItem("listaUsuario")){
            var lista = JSON.parse(localStorage.getItem("listaUsuario"));
            var html = `
    <div class= p-3>
    <table class="table table-striped table-hover table-bordered text-center">
    <thead class="table-dark">
        <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Data de Nascimento</th>
        <th>Telefone</th>
        <th>CPF</th>
        <th>Ações</th>
        </tr>
    </thead>
    <tbody>
    `;

    for(var i = 0; i < lista.length; i++){
    html += `
        <tr>
        <td>${i+1}</td>
        <td>${lista[i].nome}</td>
        <td>${lista[i].email}</td>
        <td>${lista[i].nasc}</td>
        <td>${lista[i].phone}</td>
        <td>${lista[i].cpf}</td>
        <td>
            <button class="btn btn-sm btn-danger" onclick="excluir(${i})">Excluir</button>
        </td>
        </tr>
    `;
    }

    html += `
    </tbody>
    </table>
    </div>
    `;
    document.getElementById("lista").innerHTML = html;
    }else{
        window.location.href = "novo_usuario.html"
    }
}

function excluir(id){
    var listaUsuario = JSON.parse(localStorage.getItem("listaUsuario"));
    listaUsuario.splice(id,1);
    localStorage.setItem("listaUsuario",JSON.stringify(listaUsuario));
    window.location.reload();
}
document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        window.location.href = '../index.html';
    }else{
        carregaItens();
    }    
});

document.getElementById("novo").addEventListener("click", function(){
    window.location.href = "novo_parceiro.html";
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
        if(localStorage.getItem("listaParceiro")){
            var lista = JSON.parse(localStorage.getItem("listaParceiro"));
            var html = `
    <div class= p-3>
    <table class="table table-striped table-hover table-bordered text-center">
    <thead class="table-dark">
        <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        <th>CNPJ</th>
        <th>Telefone</th>
        <th>Tipo</th>
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
        <td>${lista[i].cnpj}</td>
        <td>${lista[i].phone}</td>
        <td>${lista[i].tipo}</td>
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
        window.location.href = "novo_parceiro.html"
    }
}

function excluir(id){
    var listaParceiro = JSON.parse(localStorage.getItem("listaParceiro"));
    listaParceiro.splice(id,1);
    localStorage.setItem("listaParceiro",JSON.stringify(listaParceiro));
    window.location.reload();
}
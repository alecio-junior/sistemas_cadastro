//-----------------------------------------------------------------------------------------------------------
// Função: validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto)
// Verifica se foram informados o nome e o código do produto
// Parâmetros:
// - idNomeProduto: id do campo que contém o nome do produto
// - idCodProduto: id do campo que contém o código do produto
// - idQtidadeProduto: id do campo que contém a quantidade do produto
// OBS: Se faltar alguma informação (nome ou código do produto) aparecerá uma mensagem de erro. Em caso de 
// sucesso (todas as informações preenchidas), chama a função cadastrarProduto(...)
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------

function validarProduto(idNomeProduto, idCodProduto, idPrecoProduto, idQtidadeProduto) {

    let produto = document.getElementById(idNomeProduto).value;
    let codigo = document.getElementById(idCodProduto).value;
    let preco = document.getElementById(idPrecoProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;

    if (produto == "" || codigo == "" || preco == "" || qtidade == "")
        alert("não é premitido campo em branco. Favor preenchê-lo!");
    else cadastrarProduto(produto, codigo, parseFloat(preco), parseInt(qtidade));

}

function validarCliente(idNome, idEndereco, idCpf, idTelefone) {

    let nome = document.getElementById(idNome).value;
    let endereco = document.getElementById(idEndereco).value;
    let cpf= document.getElementById(idCpf).value;
    let telefone = document.getElementById(idTelefone).value;

    if (nome == "" || endereco == "" || cpf == "" || telefone == "")
        alert("não é premitido campo em branco. Favor preenchê-lo!");
    else cadastrarCliente(nome, endereco, cpf, telefone);

}
//-----------------------------------------------------------------------------------------------------------
// Função: cadastrarProduto(produto, codig, qtidade)
// Cadastra um novo produto (nome, código e quantidade) no estoque
// Parâmetros:
// - produto: nome do produto a ser cadastrado no estoque (Ex: arroz)
// - codig: código do produto a ser cadastrado no estoque (Ex: a01)
// - qtidade: quantidade do produto a ser cadastrado no estoque (Ex: 7)
// OBS: Apos cadastrar o novo produto no estoque, atualiza a quantidade de itens no carrinho, ou seja, chama 
// a função atualizarTotalEstoque()
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function cadastrarProduto(produto, codig, preco, qtidade) {
    let novoProduto = {produto:produto, codigo:codig,  preco:preco, quantidade:qtidade};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function cadastrarCliente(nome, endereco, cpf, telefone) {
    let novoCliente = {nome:nome, endereco:endereco, cpf:cpf, telefone:telefone};

    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        if (clientes == null) clientes = []; // Nenhum produto ainda foi cadastrado
        else clientes = JSON.parse(clientes);
        clientes.push(novoCliente); // Adiciona um novo produto
        localStorage.setItem("clientes",JSON.stringify(clientes))
        alert("o cliente "+nome+" cadastrado com sucesso !");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//-----------------------------------------------------------------------------------------------------------
// Exibe todos os itens do estoque (nome, código e quantidade)
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
            const tBody = document.getElementById('corpoTabela');
            const arr = JSON.parse(localStorage.getItem('produtos'));
        
            if (arr != null) {
              let tr = '';
              arr.map(conteudo => {
                tr += `
                          <tr>
                              <td>${conteudo.produto}</td>
                              <td>${conteudo.codigo}</td>
                              <td>${conteudo.preco}</td>
                              <td>${conteudo.quantidade}</td>
                          </tr>`
          
              })
              tBody.innerHTML = tr;
            }
        
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}

function listarCliente() {
    if (typeof(Storage) !== "undefined") {
            const tBody = document.getElementById('corpoTabela');
            const arr = JSON.parse(localStorage.getItem('clientes'));
        
            if (arr != null) {
              let tr = '';
              arr.map(conteudo => {
                tr += `
                          <tr>
                              <td>${conteudo.nome}</td>
                              <td>${conteudo.endereco}</td>
                              <td>${conteudo.cpf}</td>
                              <td>${conteudo.telefone}</td>
                          </tr>`
          
              })
              tBody.innerHTML = tr;
            }
        
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}


  
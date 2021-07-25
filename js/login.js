
function validarAcesso(CampoUsuario, CampoSenha) {
   
const usuario = sessionStorage.getItem('usuario');
const senha = sessionStorage.getItem('senha');

const LoginUsuario = document.getElementById(CampoUsuario).value
const loginSenha =  document.getElementById(CampoSenha).value


if (usuario == LoginUsuario && senha == loginSenha) {
    sessionStorage.setItem('logado', true);
    window.location = "cadastroProduto.html";
}else{
   // sessionStorage.setItem('logado', false);
    alert("usuario ou senha invalido, tente novamente");
}

}
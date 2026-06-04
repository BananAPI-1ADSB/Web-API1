// sessão
function validarSessao() {
  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  if (email == null && nome == null) {
    if (
      window.location.pathname != "/login.html" &&
      window.location.pathname != "/cadastro-usuario.html" &&
      window.location.pathname != "/cadastro-empresa.html" &&
      window.location.pathname != "/cadastro-endereco.html" &&
      window.location.pathname != "/cadastro-entreposto.html" &&
      window.location.pathname != "/calculadora.html" &&
      window.location.pathname != "/suporte.html" &&
      window.location.pathname != "/"
    ) {
      window.location = "/login.html";
    }
    return false;
  } else {
    return true;
  }
}

function headerSessao() {
  let val = validarSessao();
  if (val) {
    fetch("includes/header_autenticado.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("header").innerHTML = data;
      });
  } else {
    fetch("includes/header.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("header").innerHTML = data;
      });
  }
}

function limparSessao() {
  sessionStorage.clear();
  window.location = "/login.html";
}

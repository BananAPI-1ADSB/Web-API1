const fetchCadastrarUsuario = () => {
  fetch("http://localhost:8080/usuarios/cadastrar", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      nome: nome_cadastro.value,
      email: email_cadastro.value,
      empresa: empresa_cadastro.value,
      telefone: telefone_cadastro.value,
      senha: senha_cadastro.value,
    }),
  }).then((res) => {
      if (res.ok) {
        alternarForm();
        alert("Conta criada com sucesso!");
      } else {
        alert("Erro ao efetuar cadastro!");
      }
    });
  }

const fetchAutenticarUsuario = () => {
  fetch("http://localhost:8080/usuarios/autenticar", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      emailServer: email_login.value,
      senhaServer: senha_login.value,
    }),
  }).then((res) => {
    if (res.ok) {
      res.json().then((json) => {
        sessionStorage.ID_USUARIO = json.id;
        sessionStorage.EMAIL_USUARIO = json.email;
        sessionStorage.NOME_USUARIO = json.nome;
        sessionStorage.SENHA_USUARIO = json.senha;

        alert("Login realizado com sucesso!");
        window.location.href = "dashboard.html";
      });
    } else {
      alert("Erro ao autenticar usuario!");
    }
  });
};

const fetchCadastarEmpresa = () => {
  fetch("http://localhost:8080/empresas/cadastrar", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      nome: nome_cadastro.value,
      cnpj: cnpj_cadastro.value,
    }),
  });
};

const fetchLeitura = () => {
  fetch("http://localhost:8080/leituras/listar", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      fkSensor: fkSensor_alguma_coisa.value,
    }),
  });
};

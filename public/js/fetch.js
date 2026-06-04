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
        window.location.href = "/";
      });
    } else {
      alert("Erro ao autenticar usuario!");
    }
  });
};

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
        window.location.href = "cadastro-empresa.html"
        alert("Conta criada com sucesso!");
      } else {
        alert("Erro ao efetuar cadastro!");
      }
    });
  }
  const fetchCadastarEmpresa = () => {
    fetch("http://localhost:8080/empresas/cadastrar", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        nome: nome_empresa.value,
        cnpj: cnpj_empresa.value,
      }),
    }).then((res) => {
      if(res.ok) {
          window.location.href = "cadastro-entreposto.html"
          alert("Empresa cadastrada com sucesso!")
      } else {
        alert("Erro ao cadastrar empresa!")
      }
    })
  };

  const fetchCadastarEntreposto = () => {
    fetch("http://localhost:8080/entrepostos/cadastrar", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        nome: nome_entreposto.value,
        cnpj: fk_empresa.value,
      }),
    }).then((res) => {
      if(res.ok) {
          window.location.href = "cadastro-endereco.html"
          alert("Entreposto cadastrado com sucesso!")
      } else {
        alert("Erro ao cadastrar entreposto!")
      }
    })
  };

const fetchCadastarEndereco = () => {
  fetch("http://localhost:8080/enderecos/cadastrar", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      cep: cep_endereco.value,
      rua: rua_endereco.value,
      bairro: bairro_endereco.value,
      numero: numero_endereco.value,
      cidade: cidade_endereco.value,
      complemento: complemento_endereco.value,
      siglaEstado: estado_endereco.value,
      fkEmpresa: fk_empresa_end.value,
      fkEntreposto: fk_entreposto_end.value,
    }),
  }).then((res) => {
    if(res.ok) {
        window.location.href = "/login.html"
        alert("Endereco cadastrado com sucesso!")
    } else {
      alert("Erro ao cadastrar endereco!")
    }
  })
};

const fetchSuporte = () => {
  fetch("http://localhost:8080/bobia/perguntar", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      pergunta: texto
    })
  })
}

const fetchLeitura = () => {
  fetch("http://localhost:8080/leituras/listar", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      fkSensor: 1,
    }),
  });
};

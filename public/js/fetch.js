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
        sessionStorage.EMAIL_USUARIO = json.email;
        sessionStorage.NOME_USUARIO = json.nome;

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
      fkEmpresa: Number(empresa_cadastro.value),
      telefone: telefone_cadastro.value,
      senha: senha_cadastro.value,
    }),
  }).then((res) => {
    if (res.ok) {
      window.location.href = "login.html"
      alert("Conta criada com sucesso!");
    } else {
        alert("Erro ao efetuar cadastro!a");
      }
    });
  }
  const fetchCadastrarEmpresa = () => {
    fetch("http://localhost:8080/empresas/cadastrar", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        nome: nome_empresa.value,
        cnpj: cnpj_empresa.value,
      }),
    }).then((res) => {
      if(res.ok) {
        res.json().then((response ) => {
          sessionStorage.ID_EMPRESA = response.insertId
          window.location.href = "cadastro-entreposto.html"
          alert(`Empresa cadastrada com sucesso!\n Id da Empresa: ${response.insertId}`)
        } 
        )
      } else {
        alert("Erro ao cadastrar empresa!")
      }
    })
  };

  const fetchCadastrarEntreposto = () => {
    fetch("http://localhost:8080/entrepostos/cadastrar", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        nome: nome_entreposto.value,
        fkEmpresa: Number(fk_empresa.value),
      }),
    }).then((res) => {
      if(res.ok) {
        res.json().then((response) => {
          sessionStorage.ID_ENTREPOSTO = response.insertId
          window.location.href = "cadastro-camara.html"
          alert(`Entreposto cadastrado com sucesso!\n Id do Entreposto: ${response.insertId}`)

        })
      } else {
        alert("Erro ao cadastrar entreposto!")
      }
    })
  };

const fetchCadastrarCamara = () => {
  fetch("http://localhost:8080/camaras/cadastrar", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      nome: nome_camara,
      tipo: tipo_camara,
      fkEntreposto: Number(fk_entreposto),
    }),
  }).then((res) => {
    if(res.ok) {
        window.location.href = "cadastro-endereco.html"
        alert("Câmara cadastrada com sucesso!")
    } else {
      alert("Erro ao cadastrar câmara!")
    }
  })
};

const fetchCadastrarEndereco = () => {
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
      fkEmpresa: Number(fk_empresa_end.value),
      fkEntreposto: Number(fk_entreposto_end.value),
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
  return fetch("http://localhost:8080/bobia/perguntar", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      pergunta: texto
    })
  }).then((res) => {
    if (res.ok) {
      res.json().then((res) => {
        adicionarMensage(res, 'ia')
      })
    } else {
      adicionarMensage('Falha na conexao com BobIa...', 'ia')
    }
  })
}

const fetchLeitura = () => {
  return fetch("http://localhost:8080/leituras/listar", {
    method: "GET",
    headers: { "Content-type": "application/json" }
  }).then((res) => {
    if (res.ok) {
        return res.json()
      }
    })
  }




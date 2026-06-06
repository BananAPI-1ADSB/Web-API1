
      function limparErro(campo) {
        const erroId = `erro_${campo}`;
        window[erroId].innerHTML = "";
        if (window[campo]) {
          window[campo].classList.remove("input-erro");
        }
      }
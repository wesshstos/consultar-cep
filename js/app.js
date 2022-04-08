// BUSCANDO OS INPUTS
let cep = document.querySelector('#cep')
let rua = document.querySelector('#rua')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#estado')

// BUSCANDO O BOTÃO DE LIMPAR CAMPOS
let limparInput = document.querySelector('#limparInput')

// EVENTO DE APÓS DIGITAR O CEP E IR PARA O PROXIMO INPUT BUSCAR AS INFORMAÇÕES DA API
cep.addEventListener('blur', function (el) {
     if (cep.value === '') {
          alert('Preencha o Campo Obrigátorio')
          return cep;
     } else {
          let cep = el.target.value;
          let script = document.createElement('script');
          script.src = `https://viacep.com.br/ws/${cep}/json/?callback=popularForm`;
          document.body.appendChild(script);
     }
})

// RESPOSTA DA API, PREENCHENDO OS CAMPOS QUANDO COLOCA O CEP, CASO O CEP FOR INCORRETO DA ERRO

function popularForm(resp) {
     if ("erro" in resp) {
          alert('CEP não encontado. Digite novamente');
          return;
     } else {
          console.log(resp);
          rua.value = resp.logradouro;
          bairro.value = resp.bairro;
          cidade.value = resp.localidade;
          estado.value = resp.uf
     }
}

// COLOCANDO A MASCARA NO INPUT CEP
cep.addEventListener('keypress', () => {
     let cepLenght = cep.value.length;

     if (cepLenght === 5) {
          cep.value += '-'
     }
})

// EVENTO PARA O BOTÃO DE LIMPAR CAMPOS
limparInput.addEventListener('click', () => {
     cep.value = ''
     rua.value = ''
     bairro.value = ''
     cidade.value = ''
     estado.value = ''
})
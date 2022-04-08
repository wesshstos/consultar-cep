let cep = document.querySelector('#cep')
let rua = document.querySelector('#rua')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#estado')
let limparInput = document.querySelector('#limparInput')

cep.value;

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

cep.addEventListener('keypress', () => {
     let cepLenght = cep.value.length;

     if (cepLenght === 5) {
          cep.value += '-'
     }
})

limparInput.addEventListener('click', () => {
     cep.value = ''
     rua.value = ''
     bairro.value = ''
     cidade.value = ''
     estado.value = ''
})
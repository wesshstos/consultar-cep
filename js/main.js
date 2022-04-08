//https://viacep.com.br/ws/${uf.value}/${cidade.value}/{rua.value}/json/ 

let rua = document.querySelector('#rua')
let cidade = document.querySelector('#cidade')
let uf = document.querySelector('#estado')
let listaCep = document.querySelector('#listaCep')
let btnCep = document.querySelector('#btnBuscarCep')
let limparInput = document.querySelector('#limparInput')
let fieldset = document.querySelector('fieldset')

btnCep.addEventListener('click', function (e) {
     e.preventDefault();

     if (rua.value.length === 0 || uf.value.length === 0 || cidade.value.length === 0) {
          alert('Preencha os campos pra a requisição')

     } else {
          let urlBase = 'https://viacep.com.br/ws/';
          let parametros = uf.value + '/' + cidade.value + '/' + rua.value + '/json/';
          let callback = '?callback=popularNaoSeiMeuCep';

          let script = document.createElement('script');
          script.src = urlBase + parametros + callback;
          document.body.appendChild(script);
     }
});

function popularNaoSeiMeuCep(resposta) {

     if (!Array.isArray(resposta)) {
          alert('O retorno não é uma lista de CEPs');
          return;
     } else {
          console.log(resposta);
          resposta.forEach(function (i) {

               fieldset.style.display = 'block';
               let li = document.createElement('li');
               let endereco = i.logradouro + ' | ' + i.bairro + ' | ' + i.localidade + ' | ' + i.uf + ' | ' + i.cep;
               li.innerHTML = endereco + '<br><hr>';
               li.setAttribute('onclick', 'exibirCep(' + i.cep.replace('-', '') + ')')
               listaCep.appendChild(li);
          });
     }
}

function exibirCep(cep) {
     alert(cep);
}

limparInput.addEventListener('click', () => {
     rua.value = '';
     uf.value = '';
     cidade.value = '';
     fieldset.style.display = 'none'
     
} )
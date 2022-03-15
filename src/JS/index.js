/*
quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostar o cartão correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos:
1- listagem
2- cartão do pokemon

Precisamos criar duas varáiveis no JS para trabalhar com os elementos da tela

//Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

-remover a classe aberto só do cartão que está aberto
-ao clicar em um pokemon da listagem pegamos o id do pokemon para saber qual o cartão mostrar
-remover a classse ativo que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado

*/
// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

//Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
// -remover a classe aberto só do cartão que está aberto
 const cartaoPokemonAberto = document.querySelector('.aberto')
 cartaoPokemonAberto.classList.remove('aberto')
 // -ao clicar em um pokemon da listagem pegamos o id do pokemon para saber qual o cartão mostrar
const idPokemonSelecionado = pokemon.attributes.id.value

const idDoCartaoPokemonParaAbrir = 'cartao'- + idPokemonSelecionado 
const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
cartaoPokemonParaAbrir.classList.add('aberto')

// -remover a classe ativo que marca o pokemon selecionado
const pokemonAtivoNaListagem = document.querySelector('.ativo')
pokemonAtivoNaListagem.classList.remove('ativo')

// -adicionar a classe ativo no item da lista selecionado
const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
pokemonSelecionadoNaListagem.classList.add('ativo')
 })
    
   
})



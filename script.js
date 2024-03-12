'use strict';



const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal') //querySelectorAll - Seleciona todos as classes deifinida com o mesmo nome


const openModal = function () {//criamos uma variavel na funçao para pode usar ela em varios eventos
    modal.classList.remove('hidden')//selecionamos a classe do texto, que esta oculta usando a classe 'hidden' no html e colocamos classList.remove para remover o hidden da classe, sem ponto 
    overlay.classList.remove('hidden')
}

for (let i = 0; i < btnOpenModal.length; i++) { //iremos usar um for para distribuir uma função para cada classe de uma vez só
    btnOpenModal[i].addEventListener('click', openModal)  //selecionamos a variavel que abre o texto e passamos a variavel i e depois usamos a variavel da função openModal para exewcutar o que ela tem dentro

}


const closeModal = function () { //criamos uma variavel na funçao para pode usar ela em varios eventos
    modal.classList.add('hidden')//usamos a mesma lógica mas para adicionar novamente a classe hidden, ou seja desaparecer a caixa de texto
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModal)//aqui selecionamos a variavel que quermos executar o evento, colocamos qual evento queremos 'click' e colocamos a variavel da função para executar o que esta dentro dela 'closeModal'
overlay.addEventListener('click', closeModal)//aqui selecionamos a variavel que quermos executar o evento, colocamos qual evento queremos 'click' e colocamos a variavel da função para executar o que esta dentro dela 'closeModal'
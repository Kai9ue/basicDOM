function addPlayer() {
  //peguei os elementos do html e inseri em uma variável
  const name = document.getElementById('name').value
  const position = document.getElementById('position').value
  const number = document.getElementById('number').value

  //criei um 'pop-up' de confirmação que aparece através do Button
  const confirmation = confirm("Escalar " + name + " como " + position + "?")

  //Aqui a mágica acontece para inserir elementos do DOM no html
  if (confirmation) {
    //peguei o elemento pelo ID da minha lista(UL) e inseri na variável
    const lineup = document.getElementById('lineup')
    //criei a variável pro item que eu quero inserir no HTML e crei o elemento (li). que nada mais é filho do ul
    const playerItem = document.createElement('li') 
    //aqui fiz atribuições a esse elemento (variável)
    playerItem.id = 'player-' + number
    playerItem.innerText = position + ": " + name + " (" + number + ") "

    //e aqui é o gran finale acrescentando esse elemento como um novo nó no DOM
    lineup.appendChild(playerItem)

    //Limpar os campos do input após utilizá-los (a proprieade .value é utilizado para acessar o conteúdo de um input)
    document.getElementById('name').value = ''
    document.getElementById('position').value = ''
    document.getElementById('number').value = ''
  }
}

//para remover o elemento DOM já inserido no HTML
function removePlayer() { 
  //peguei o elemento a ser removido(ul) e inseri na variável
  const number = document.getElementById('numberRemove').value

  //criei uma nova variavel e inseri o elemento(li) pelo id já criado na função anterior.
  const playerToRemove = document.getElementById('player-' + number)

  //pop-up de confirmação para remover o elemento da lista
  //note que é possivel atribuir o innertext da função anterior a esse elemento
  const confirmation = confirm('Remover o ' + playerToRemove.innerText + '?')

  //e aqui acontece a exclusão
  if (confirmation) {
    //pega o elemento lineup (ul) e remove dele o playerToRemove que nada mais é uma variavel que foi criada como li na função anterior
    document.getElementById('lineup').removeChild(playerToRemove)

    //limpar os campos do imput apos utilizar o button
    document.getElementById('numberRemove').value = ''
  }
}
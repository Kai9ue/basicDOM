function addContact() {
  const contactSection = document.getElementById('contact-list')

  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'

  //seguir a lógica dos acontecimentos -> UL abre LI (LISTA) que vai abrir INPUT.//// logo LI -> INPUT
  ul.appendChild(nameLi)
  nameLi.appendChild(nameInput)
  ul.appendChild(document.createElement('br')) //pular linha
/////////////////////////////////////////////////////
  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'

  ul.appendChild(phoneLi)
  phoneLi.appendChild(phoneInput)
  ul.appendChild(document.createElement('br'))

  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Endereço: </label>'
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'
  
  ul.appendChild(addressLi)
  addressLi.appendChild(addressInput)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul)
}

function removeContact() {
  const contactSection = document.getElementById('contact-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(titles[titles.length - 1]) //remover elementos em um nó no DOM
  contactSection.removeChild(contacts[contacts.length - 1])
}
function register(element) {
  //variavel pra cada input e seus valores
  //element = parâmetro
  //children é a propriedade que está disponivel pros elementos no html
  const name = element.children.name.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  if (password == passwordConfirmation) {
    alert("Usuário " + name + " registrado!")
  } else {
    alert("As senhas não correnspodem")
  }
}
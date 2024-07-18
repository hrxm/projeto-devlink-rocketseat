function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  //procurar pela tag img
  const img = html.querySelector('#profile img')

  //substituir img
  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute("alt", "Hiro sensei com Sakura em Curitiba")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Hiro sensei sorrindo em Asakusa")


  }

  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}
  
}


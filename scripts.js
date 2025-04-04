 let body = document.querySelector("body")
 let tenis = document.querySelector(".imgagem-tenis")
//document = html
//querySelector = pegador / selecionador


function mudarvisual(cor, imagem){
  console.log(cor)
  body.style.background = cor
  tenis.src = imagem
}
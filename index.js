var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaEsq = window.document.getElementById("seta-esquerda")
var SetaDir = window.document.getElementById("seta-direita")
var DivCard = window.document.getElementById("div-card")

function RolarParaDireita () {
    Bruna.style = "display: flex"
    Leonardo.style = "display: none"
    SetaDir.style = "display: none"
    SetaEsq.style = "display: flex"
}

function RolarParaEsquerda () {
    Bruna.style = "display: none"
    Leonardo.style = "display: flex"
    SetaDir.style = "display: flex"
    SetaEsq.style = "display: none"
}

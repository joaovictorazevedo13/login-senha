const caixa = document.querySelector(".caixa")
const caixa2 = document.querySelector(".caixa2")
const cadastrar = document.querySelector(".cadastrar-agora")
const entrar = document.querySelector(".entre-agora")

cadastrar.addEventListener("click", function(){

    if(caixa2.style.display === "none") {
        caixa2.style.display = "block"
    } else {
        caixa2.style.display = "none"
    }

})

entrar.addEventListener("click", function(){

    if(caixa2.style.display === "block") {
        caixa2.style.display = "none"
    }
    else {
        return 0
    }

})

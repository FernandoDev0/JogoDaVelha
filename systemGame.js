const cellelementos  = document.querySelectorAll("[data-cell]");
let deQuemEvez ;
const textoFim = document.querySelector("[data-texto]");
const blocoFim = document.querySelector("[data-mensagem]")
const resetar = document.querySelector("[data-botao]")
let cobinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const iniciarJogo = () => {
    for (const cell of cellelementos) {
        cell.classList.remove("x");
        cell.classList.remove("o");
        cell.removeEventListener("click",clicadoUmavez);
        cell.addEventListener("click",clicadoUmavez,{once: true})
    }

    deQuemEvez = false;

    blocoFim.classList.remove("mostrarFim")


}


const ckecandoempate = () => {
    return [...cellelementos].every(cell => {
       return cell.classList.contains("x") || cell.classList.contains("o");
    })
} 

const mudarVez = () => {
    deQuemEvez = !deQuemEvez
}

const checando = (ckecandojogador)=>{
    return cobinacoes.some(cobinacao => {
        return cobinacao.every(index => {
            return cellelementos[index].classList.contains(ckecandojogador)
        })
    })
}

const fimDeJogo = (bool) => {
    if(bool){
        textoFim.innerHTML = "Empate";
    }else{
        textoFim.innerHTML = deQuemEvez ? "O Venceu !" : "X Venceu !"
    }

    blocoFim.classList.add("mostrarFim")
}



const clicadoUmavez = (e) => {
    const classAdd = deQuemEvez ? "o" : "x";
    const cell = e.target;

    cell.classList.add(classAdd)

    const seraVencedor = checando(classAdd);
    const seForEmpate  = ckecandoempate()

    if(seraVencedor){
        fimDeJogo(false)
    }else if (seForEmpate){
        fimDeJogo(true)

    }


 
    mudarVez()
}



iniciarJogo();

resetar.addEventListener("click",iniciarJogo)

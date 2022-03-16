var escolha;

function adicionarAtivoPedra() {
    document.getElementById("pedra").classList.add("ativo");
    document.getElementById("papel").classList.remove("ativo");
    document.getElementById("tesoura").classList.remove("ativo");
    escolha = "pedra";
    console.log(escolha);
}

function adicionarAtivoPapel() {
    document.getElementById("papel").classList.add("ativo");
    document.getElementById("pedra").classList.remove("ativo");
    document.getElementById("tesoura").classList.remove("ativo");
    escolha = "papel";
    console.log(escolha);
}

function adicionarAtivoTesoura() {
    document.getElementById("tesoura").classList.add("ativo");
    document.getElementById("pedra").classList.remove("ativo");
    document.getElementById("papel").classList.remove("ativo");
    escolha = "tesoura";
    console.log(escolha);
}

function mostrarResultado() {
    apresentarEscolhaJogador();
    var sorteio = apresentarEscolhaMaquina();

    if (escolha == "pedra" && sorteio == 1) {
        var resultado = document.getElementById("mensagem");
        resultado.innerHTML = "VOCÊ PERDEU!"
    }else if (escolha == "pedra" && sorteio == 0) {
        var resultado = document.getElementById("mensagem");
        resultado.innerHTML = "EMPATE!"
    }else if (escolha == "pedra" && sorteio == 2) {
        var resultado = document.getElementById("mensagem");
        resultado.innerHTML = "VOCÊ GANHOU!"
    }
    if (escolha == "papel" && sorteio == 2) {
        var resultado = document.getElementById("mensagem");
        resultado.innerHTML = "VOCÊ PERDEU!"
    }else if (escolha == "papel" && sorteio == 1) {
        var resultado = document.getElementById("mensagem");
        resultado.innerHTML = "EMPATE!"
    }else if (escolha == "papel" && sorteio == 0) {
        var resultado = document.getElementById("mensagem");
        resultado.innerHTML = "VOCÊ GANHOU!"
    }
    if (escolha == "tesoura" && sorteio == 0) {
        var resultado = document.getElementById("mensagem");
        resultado.innerHTML = "VOCÊ PERDEU!"
    }else if (escolha == "tesoura" && sorteio == 2) {
        var resultado = document.getElementById("mensagem");
        resultado.innerHTML = "EMPATE!"
    }else if (escolha == "tesoura" && sorteio == 1) {
        var resultado = document.getElementById("mensagem");
        resultado.innerHTML = "VOCÊ GANHOU!"
    }
}

function apresentarEscolhaJogador() {
    if (escolha == "pedra") {
        var opcao = document.getElementById("movimentoJogador");
        opcao.innerHTML = "✊🏻";
    } else if (escolha == "papel") {
        var opcao = document.getElementById("movimentoJogador");
        opcao.innerHTML = "🖐🏻";
    } else if (escolha == "tesoura") {
        var opcao = document.getElementById("movimentoJogador");
        opcao.innerHTML = "✌🏻";
    }
}

function apresentarEscolhaMaquina() {
    var sorteio = parseInt(Math.random()*3);
    
    if (sorteio == 0) {
        var opcaoMaquina = document.getElementById("movimentoMaquina");
        opcaoMaquina.innerHTML = "✊🏻";
    } else if (sorteio == 1) {
        var opcaoMaquina = document.getElementById("movimentoMaquina");
        opcaoMaquina.innerHTML = "🖐🏻";
    } else if (sorteio == 2) {
        var opcaoMaquina = document.getElementById("movimentoMaquina");
        opcaoMaquina.innerHTML = "✌🏻";
    }
    return sorteio;
}

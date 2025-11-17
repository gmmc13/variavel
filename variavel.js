function armazenarValor() {
    // armazena o valor digitado pelo usuário
    var textoDoUsuario = document.getElementById("entradaDoUsuario").value;

    // exibe o valor fornecido pelo usuário
    console.log("O valor fornecido é: " + textoDoUsuario);

    // atualiza o conteúdo
    document.getElementById("paragrafoDeEscrita").innerText = "O valor inserido é: " + textoDoUsuario;
}
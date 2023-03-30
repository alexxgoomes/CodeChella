const nome = document.getElementById("nome");
const tipo = document.getElementById("tipo");
const botao = document.getElementById("botao");
const elementoParaAdicionarNoIngresso = document.getElementById("ticket");

botao.addEventListener('click', () => {
    colocarNoIngresso();
})

function colocarNoIngresso() {
    elementoParaAdicionarNoIngresso.innerHTML = `
    <div class="ticket__simbolos">
        <img class="simbolo" src="./assets/Logo1 3.png" alt="logo codechella">
        <img class="simbolo" src="./assets/Ellipse 4.png" alt="simbolo codechella">
    </div>
    <div class="ticket__conteudo">
        <img class="qrcode" src="./assets/qrcode.png" alt="qrcode">
        <div class="ticket__conteudo__informacoes">
            <h1 class="ticket__conteudo__informacoes__titulo" id="nome-ingresso">${nome.value}</h1>
            <p class="ticket__conteudo__informacoes__subtitulo">Ingresso Cortesia</p>
            <p class="ticket__conteudo__informacoes__subtitulo" id="tipo-ingresso">${tipo.value}</p>
            <p class="ticket__conteudo__informacoes__subtitulo">Data: 11/03/2023</p>
            <p class="ticket__conteudo__informacoes__subtitulo">Local: São Paulo-SP</p>
        </div>
    </div>
    `
}
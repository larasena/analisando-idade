function analisar() {
    let anoNasc = Number(window.prompt('Em que ano você nasceu?'));
    let agora = new Date;
    let ano = agora.getFullYear();
    idade = ano - anoNasc;
    let res = document.getElementById('resultado');

    res.innerHTML = `Quem nasceu no ano de ${anoNasc}, vai completar ${idade} em ${ano}`;
}
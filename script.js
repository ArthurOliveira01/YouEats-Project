let prato, bebida, sobremesa;
let valorprato = parseFloat();
let valorbebida = parseFloat()
let valorsobremesa = parseFloat();

function selecionarTeriyaki() {
    document.getElementById("teriyaki").style.borderColor = "#32B72F";
    document.getElementById("bife").style.borderColor = "#FFFFFF";
    document.getElementById("hamburguer").style.borderColor = "#FFFFFF";
    document.getElementById("pizza").style.borderColor = "#FFFFFF";
    document.getElementById("verificado-teriyaki").classList.remove("off");
    document.getElementById("verificado-bife").classList.add("off");
    document.getElementById("verificado-hamburguer").classList.add("off");
    document.getElementById("verificado-pizza").classList.add("off");
    prato = "Frango Teriyaki";
    valorprato = Number(16.70);
}

function selecionarBife() {
    document.getElementById("teriyaki").style.borderColor = "#FFFFFF";
    document.getElementById("bife").style.borderColor = "#32B72F";
    document.getElementById("hamburguer").style.borderColor = "#FFFFFF";
    document.getElementById("pizza").style.borderColor = "#FFFFFF";
    document.getElementById("verificado-teriyaki").classList.add('off');
    document.getElementById("verificado-bife").classList.remove("off");
    document.getElementById("verificado-hamburguer").classList.add("off");
    document.getElementById("verificado-pizza").classList.add("off");
    prato = "Bife Acebolado";
    valorprato = Number(19.70);
}

function selecionarHamburguer() {
    document.getElementById("teriyaki").style.borderColor = "#FFFFFF";
    document.getElementById("bife").style.borderColor = "#FFFFFF";
    document.getElementById("hamburguer").style.borderColor = "#32B72F";
    document.getElementById("pizza").style.borderColor = "#FFFFFF";
    document.getElementById("verificado-teriyaki").classList.add("off");
    document.getElementById("verificado-bife").classList.add("off");
    document.getElementById("verificado-hamburguer").classList.remove("off");
    document.getElementById("verificado-pizza").classList.add("off");
    prato = "Hamburguer";
    valorprato = Number(20.50);
}

function selecionarPizza() {
    document.getElementById("teriyaki").style.borderColor = "#FFFFFF";
    document.getElementById("bife").style.borderColor = "#FFFFFF";
    document.getElementById("hamburguer").style.borderColor = "#FFFFFF";
    document.getElementById("pizza").style.borderColor = "#32B72F";
    document.getElementById("verificado-teriyaki").classList.add("off");
    document.getElementById("verificado-bife").classList.add("off");
    document.getElementById("verificado-hamburguer").classList.add("off");
    document.getElementById("verificado-pizza").classList.remove("off");

    prato = "Pizza";
    valorprato = Number(41.20);
}

function selecionarGuarana() {
    document.getElementById("guarana").style.borderColor = "#32B72F";
    document.getElementById("agua").style.borderColor = "#FFFFFF";
    document.getElementById("suco").style.borderColor = "#FFFFFF";
    document.getElementById("coca").style.borderColor = "#FFFFFF";
    document.getElementById("verificado-guarana").classList.remove("off");
    document.getElementById("verificado-agua").classList.add("off");
    document.getElementById("verificado-suco").classList.add("off");
    document.getElementById("verificado-coca").classList.add("off");
    bebida = "Guaraná Antártica";
    valorbebida = Number(4.50);
}

function selecionarAgua() {
    document.getElementById("guarana").style.borderColor = "#FFFFFF";
    document.getElementById("agua").style.borderColor = "#32B72F";
    document.getElementById("suco").style.borderColor = "#FFFFFF";
    document.getElementById("coca").style.borderColor = "#FFFFFF";
    document.getElementById("verificado-guarana").classList.add('off');
    document.getElementById("verificado-agua").classList.remove("off");
    document.getElementById("verificado-suco").classList.add("off");
    document.getElementById("verificado-coca").classList.add("off");

    bebida = "Água Mineral";
    valorbebida = Number(2.70);
}

function selecionarSuco() {
    document.getElementById("guarana").style.borderColor = "#FFFFFF";
    document.getElementById("agua").style.borderColor = "#FFFFFF";
    document.getElementById("suco").style.borderColor = "#32B72F";
    document.getElementById("coca").style.borderColor = "#FFFFFF";
    document.getElementById("verificado-guarana").classList.add("off");
    document.getElementById("verificado-agua").classList.add("off");
    document.getElementById("verificado-suco").classList.remove("off");
    document.getElementById("verificado-coca").classList.add("off");
    bebida = "Suco de laranja";
    valorbebida = Number(5.50);
}

function selecionarCoca() {
    document.getElementById("guarana").style.borderColor = "#FFFFFF";
    document.getElementById("agua").style.borderColor = "#FFFFFF";
    document.getElementById("suco").style.borderColor = "#FFFFFF";
    document.getElementById("coca").style.borderColor = "#32B72F";
    document.getElementById("verificado-guarana").classList.add("off");
    document.getElementById("verificado-agua").classList.add("off");
    document.getElementById("verificado-suco").classList.add("off");
    document.getElementById("verificado-coca").classList.remove("off");

    bebida = "Coca-Cola";
    valorbebida = Number(8.00);
}

function selecionarBomba() {
    document.getElementById("bomba").style.borderColor = "#32B72F";
    document.getElementById("pave").style.borderColor = "#FFFFFF";
    document.getElementById("bolo").style.borderColor = "#FFFFFF";
    document.getElementById("sorvete").style.borderColor = "#FFFFFF";
    document.getElementById("verificado-bomba").classList.remove("off");
    document.getElementById("verificado-pave").classList.add("off");
    document.getElementById("verificado-bolo").classList.add("off");
    document.getElementById("verificado-sorvete").classList.add("off");
    sobremesa = 'Bomba de chocolate';
    valorsobremesa = Number(3.50);
}

function selecionarPave() {
    document.getElementById("bomba").style.borderColor = "#FFFFFF";
    document.getElementById("pave").style.borderColor = "#32B72F";
    document.getElementById("bolo").style.borderColor = "#FFFFFF";
    document.getElementById("sorvete").style.borderColor = "#FFFFFF";
    document.getElementById("verificado-bomba").classList.add('off');
    document.getElementById("verificado-pave").classList.remove("off");
    document.getElementById("verificado-bolo").classList.add("off");
    document.getElementById("verificado-sorvete").classList.add("off");

    sobremesa = "Pavê";
    valorsobremesa = Number(31.30);
}

function selecionarBolo() {
    document.getElementById("bomba").style.borderColor = "#FFFFFF";
    document.getElementById("pave").style.borderColor = "#FFFFFF";
    document.getElementById("bolo").style.borderColor = "#32B72F";
    document.getElementById("sorvete").style.borderColor = "#FFFFFF";
    document.getElementById("verificado-bomba").classList.add("off");
    document.getElementById("verificado-pave").classList.add("off");
    document.getElementById("verificado-bolo").classList.remove("off");
    document.getElementById("verificado-sorvete").classList.add("off");
    sobremesa = "Bolo de chocolate";
    valorsobremesa = Number(34.00);
}

function selecionarSorvete() {
    document.getElementById("bomba").style.borderColor = "#FFFFFF";
    document.getElementById("pave").style.borderColor = "#FFFFFF";
    document.getElementById("bolo").style.borderColor = "#FFFFFF";
    document.getElementById("sorvete").style.borderColor = "#32B72F";
    document.getElementById("verificado-bomba").classList.add("off");
    document.getElementById("verificado-pave").classList.add("off");
    document.getElementById("verificado-bolo").classList.add("off");
    document.getElementById("verificado-sorvete").classList.remove("off");

    sobremesa = "Sorvete";
    valorsobremesa = Number(16.00);
}

function envio() {
    const finalvalor = Number(valorprato) + Number(valorbebida) + Number(valorsobremesa);
    const whats = "https://wa.me/5565996587126?text=";
    var mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${finalvalor.toFixed(2).toString().replace('.', ',')}`;
    const final = whats + encodeURIComponent(mensagem);
    document.location.href=final;
    console.log(finalvalor);
}

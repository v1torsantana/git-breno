function calcularConsumo() {
    var watts = parseFloat(document.getElementById("watts").value);
    var horas = parseFloat(document.getElementById("horas").value);
    var dias = parseFloat(document.getElementById("dias").value);
    var preco = parseFloat(document.getElementById("preco").value);

    var kwh = watts * horas * dias / 1000;
    var custo = kwh * preco;

    var resultado = document.getElementById("resultado")
    window.alert('Você vai gastar' +resultado)
}
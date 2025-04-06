//WONS
valorwons = prompt("Digite um valor em wons");
//alert(valorwons)
umwon = 0.004;
alert("R$" + valorwons * umwon);
console.log("O valor de wons em real é " + valorwons * umwon);

// Formata o valor para o formato "1.000.000,00"
//var valorFormatado = valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Cria um novo elemento de imagem
imgW = document.createElement("img");
imgD = document.createElement("imgD");
imgE = document.createElement("imgE");

// Define o atributo src com o caminho da imagem
//imgW.src = "https://i.postimg.cc/9fcRM5NV/th-id-OIP.jpg";
//imgD.src = "https://i.postimg.cc/2yNfkm27/billetes-de-1-dolar-delantera-y-trasera-c06d3g.jpg";
//imgD.src = //"https://i.postimg.cc/9fcRM5NV/th-id-OIP.jpg";

// Define a largura e altura da imagem
imgW.width = 800;
imgD.width = 800;
imgE.width = 800; // Defina a largura desejada em pixels
imgW.height = 350;
imgD.height = 350;
imgE.height = 350; // Defina a altura desejada em pixels

// Define o atributo alt para acessibilidade
imgW.alt = "Wons ";
imgD.alt = "Dolar ";
imgE.alt = "Euro ";

// Adiciona a imagem ao corpo do documento (ou a um elemento específico)
document.body.appendChild(imgW);
document.body.appendChild(imgD);
document.body.appendChild(imgE);
//comandos JS
// alert(caixa alerta)
//prompt(usuario)
//consoke.log (texto)

//DOLAR
valorEmDolar = prompt("Digite um valor em $ ");
dolar = 5.77;
valorRealD = valorEmDolar * dolar;
valorRealDF = valorRealD.toLocaleString("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
alert("R$ " + valorRealDF);
console.log("O valor de $ em R$" + valorRealDF);

// Suponha que você tenha um valor numérico
//var valor = 1000000.50; // Exemplo de valor

// Formata o valor para o formato "1.000.000,00"
//var valorFormatado = valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Exibe o valor formatado
//console.log(valorFormatado); // 1.000.000,50

//wons, dolar, euro, bitconins
//EURO
valorEmEuro = prompt("Digite um valor em € euro");
euro = 6.15;
valorRealE = valorEmEuro * euro;
alert("R$" + valorRealE);
console.log("O valor de € em R$ é salvo " + valorRealE);
valorRealF = valorRealE.toLocaleString("pt-BR", {
  minimumFractionDigits: 2,
  maximumFracDigits: 2
});

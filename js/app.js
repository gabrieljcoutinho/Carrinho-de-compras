let totalGeral = 0;

function adicionar() {
    let produto = document.getElementById("produto").value;
    let quantidade = parseInt(document.getElementById("quantidade").value) || 0;

    // Garantir que o valor é válido
    if (!produto || quantidade <= 0) {
        alert("Selecione um produto e informe uma quantidade válida!");
        return;
    }

    let nomeProduto = "";
    let valorUnitario = 0;

    // Extrair nome e preço dependendo do formato
    if (produto.includes("R$")) {
        let partes = produto.split("R$");
        nomeProduto = partes[0].replace("-", "").trim();
        valorUnitario = parseFloat(partes[1].replace(",", ".").trim());
    } else {
        alert("O valor do produto não contém 'R$'. Verifique o formato.");
        return;
    }

    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}</span> ${nomeProduto}
            <span class="texto-azul">R$ ${preco.toFixed(2)}</span>
        </section>
    `;

    totalGeral += preco;
    document.getElementById("valor-total").textContent = `R$ ${totalGeral.toFixed(2)}`;
}

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0.00";
    totalGeral = 0;
}

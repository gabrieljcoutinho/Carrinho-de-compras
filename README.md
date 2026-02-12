# Documentação do Projeto: Carrinho de Compras

Este arquivo detalha a estrutura HTML e os componentes do sistema de carrinho de compras.

---

## 1. Configurações Iniciais
O documento utiliza fontes externas via Google Fonts (**Chakra Petch** e **Inter**) e vincula um arquivo de estilo externo chamado `style.css`.

---

## 2. Estrutura de Entrada (Formulário)
A seção de adição de produtos permite ao usuário selecionar itens e quantidades:

* **Seleção de Produto (`#produto`)**: Um menu dropdown que já contém o nome e o preço dos produtos:
    * Fone de ouvido (R$100)
    * Celular (R$1400)
    * Oculus VR (R$5000)
* **Campo de Quantidade (`#quantidade`)**: Um campo do tipo numérico para definir quantas unidades serão adicionadas.
* **Ações (Botões)**:
    * **Adicionar**: Dispara a função `adicionar()` para inserir o item na lista.
    * **Limpar**: Dispara a função `limpar()` para resetar o carrinho e o valor total.

---

## 3. Visualização do Carrinho
A seção da direita exibe o resumo da compra:

* **Lista de Produtos (`#lista-produtos`)**: Uma seção dinâmica que armazena os itens adicionados. Cada item mostra a quantidade, o nome e o preço.
* **Valor Total (`#valor-total`)**: Um elemento de texto que exibe a soma acumulada de todos os produtos inseridos.

---

## 4. Referências para o JavaScript (IDs)
Para que o arquivo `js/app.js` funcione corretamente, os seguintes IDs devem ser manipulados:

| Elemento | ID | Função |
| :--- | :--- | :--- |
| **Dropdown de Produtos** | `produto` | Capturar nome e preço do item selecionado. |
| **Campo de Valor** | `quantidade` | Capturar a quantidade desejada. |
| **Lista Visual** | `lista-produtos` | Inserir o HTML dos novos itens no carrinho. |
| **Somatório** | `valor-total` | Atualizar o preço final da compra. |

---

> **Observação**: O layout depende das imagens localizadas na pasta `./assets/` para exibir os ícones do carrinho.
<img width="1855" height="879" alt="Image" src="https://github.com/user-attachments/assets/6803f65c-745a-4e4d-ad76-648edffd60b8" />

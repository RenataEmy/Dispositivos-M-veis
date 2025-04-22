"use strict";
/*Crie uma função chamada filtrarProdutosDisponiveis que receba um array de produtos com: nome (string), emEstoque (boolean), e retorne apenas os que estão em estoque.*/
;
const listaProdutos = [{ nome: 'livro', emEstoque: true }, { nome: 'carta', emEstoque: false }];
listaProdutos.forEach(produto => {
    if (produto.emEstoque) {
        console.log('Produtos disponíveis:');
        console.log(`${produto.nome}`);
    }
});

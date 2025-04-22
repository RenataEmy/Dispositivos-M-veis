/*Crie uma função chamada filtrarProdutosDisponiveis que receba um array de produtos com: nome (string), emEstoque (boolean), e retorne apenas os que estão em estoque.*/


interface Produtos{
    nome: string,
    emEstoque: boolean
};

const listaProdutos: Produtos[] = [{nome: 'livro', emEstoque: true}, {nome: 'carta', emEstoque: false}];


listaProdutos.forEach(produto => {
    if(produto.emEstoque){
        console.log('Produtos disponíveis:');
        console.log(`${produto.nome}`);
    }
});


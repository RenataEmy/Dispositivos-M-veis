/*Crie um objeto chamado livro com os campos: título (string), autor (string), paginas (number). Imprima uma frase com essas informações.*/


const livro: {titulo: string, autor: string, paginas: number} = {
    titulo: 'Harry Potter',
    autor: 'J.K.Rowling',
    paginas: 517
};

console.log(`Estou lendo ${livro.titulo} escrito por ${livro.autor}. O livro tem ${livro.paginas} paginas.`);
/*Crie um array de objetos alunos com 3 elementos (baseado na interface do exercício 8). Percorra esse array e imprima o nome dos alunos ativos (ativo === true).*/

interface Aluno{
    nome: string,
    matricula: number,
    ativo: boolean
};

const alunos: Aluno[] = [{nome: 'Carlos', matricula: 202409, ativo: true}, {nome: 'Daniel', matricula: 202411, ativo: false}, {nome: 'Demetrios', matricula: 202412, ativo: true}];

console.log('Alunos ativos:');
alunos.forEach(aluno => {
    if (aluno.ativo === true){
        console.log(`${aluno.nome}`);
    }
});


const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'ANa', nota: 8.7, bolsista: true },
]

// Desafio 1: todos os alunos são bolsistas?
const todosOsBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log('Todos são bolsistas? = ' + alunos.map(a => a.bolsista).reduce(todosOsBolsistas))

// Desafio: há algum aluno que seja bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log('Há algum bolsista? = ' + alunos.map(a => a.bolsista).reduce(algumBolsista))
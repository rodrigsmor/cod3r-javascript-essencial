const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
    { nome: 'Caderno', preco: 10.50, fragil: false },
]

console.log(produtos.filter(function(p) {
    return p.fragil && p.preco >= 500
}))
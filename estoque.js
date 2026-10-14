// Atividade Prática: Sistema de Gestão de Estoque com Arrays em JavaScript
// Parte 1 - Declaração e modificação
console.log("=== PARTE 1 ===");
// 1.1
const categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];
console.log("1.1:", categorias);
// 1.2
const codigosProdutos = [101, 102, 103, 104];
const fornecedores = new Array('TechSupply', 'ModaExpress', 'SuperFoods');
console.log("1.2 - Códigos:", codigosProdutos);
console.log("1.2 - Fornecedores:", fornecedores);
// 1.3
console.log("1.3 - Primeira categoria:", categorias[0]);
categorias[1] = 'Calçados';
console.log("1.3 - Categorias atualizadas:", categorias);

// Parte 2 - Inserção, remoção e pesquisa
console.log("\n=== PARTE 2 ===");
// 2.1
categorias.push('Livros');
console.log("2.1 - Após push:", categorias);
categorias.pop();
console.log("2.1 - Após pop:", categorias);
categorias.unshift('Brinquedos');
console.log("2.1 - Após unshift:", categorias);
categorias.shift();
console.log("2.1 - Após shift:", categorias);
// 2.2
console.log("2.2 - Tamanho:", categorias.length);
// 2.3
console.log("2.3 - Índice de Calçados:", categorias.indexOf('Calçados'));
console.log("2.3 - Contém Eletrônicos:", categorias.includes('Eletrônicos'));

// Parte 3 - Iteração
console.log("\n=== PARTE 3 ===");
// 3.1
console.log("3.1 - for tradicional:");
for (let i = 0; i < categorias.length; i++) {
  console.log(categorias[i]);
}
// 3.2
console.log("3.2 - for...of:");
for (const categoria of categorias) {
  console.log(categoria);
}

// Parte 4 - Arrays de objetos e métodos avançados
console.log("\n=== PARTE 4 ===");
const produtos = [
  { nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
  { nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
  { nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];
// 4.1
console.log("4.1 - Primeiro produto:", produtos[0].nome);
// 4.2 - filter
const produtosBaratos = produtos.filter(produto => produto.preco < 300.00);
console.log("4.2 - Produtos baratos:", produtosBaratos);
const precos = [50, 150, 200, 350, 400];
const multiplosDe100 = precos.filter(preco => preco % 100 === 0);
console.log("4.2 - Múltiplos de 100:", multiplosDe100);
// 4.3 - reduce
const quantidades = [2, 3, 5, 10];
const totalItens = quantidades.reduce((acumulador, quantidade) => acumulador + quantidade, 0);
console.log("4.3 - Total de itens:", totalItens);
const valorTotalEstoque = produtos.reduce(
  (acumulador, produto) => acumulador + produto.preco * produto.estoque, 0
);
console.log("4.3 - Valor total do estoque: R$", valorTotalEstoque.toFixed(2));
// 4.4 - map
const precosOriginais = [100, 200, 300];
const precosComDesconto = precosOriginais.map(preco => preco * 0.9);
console.log("4.4 - Preços com desconto:", precosComDesconto);
const nomesProdutos = produtos.map(produto => produto.nome);
console.log("4.4 - Nomes dos produtos:", nomesProdutos);
// 4.5 - slice e sort
const produtosOrdenados = produtos.slice().sort((a, b) => a.preco - b.preco);
console.log("4.5 - Produtos ordenados:", produtosOrdenados);
// 4.6 - some e find
const existeEstoqueBaixo = produtos.some(produto => produto.estoque < 5);
console.log("4.6 - Existe estoque menor que 5:", existeEstoqueBaixo);
const inventario = [
  { nome: 'Teclado', estoque: 15 },
  { nome: 'Mouse', estoque: 2 },
  { nome: 'Headset', estoque: 10 }
];
const existeEstoqueCritico = inventario.some(produto => produto.estoque < 5);
const primeiroProdutoCritico = inventario.find(produto => produto.estoque < 5);
console.log("4.6 - Existe estoque crítico:", existeEstoqueCritico);
console.log("4.6 - Primeiro produto crítico:", primeiroProdutoCritico);

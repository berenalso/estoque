const categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];
const codigosProdutos = [101, 102, 103, 104];
const fornecedores = new Array('TechSupply', 'ModaExpress', 'SuperFoods');

function mostrar(parte, titulo, valor) {
  console.log(titulo, valor);
  const card = document.createElement('article');
  card.className = 'resultado';
  const cabecalho = document.createElement('h3');
  cabecalho.textContent = titulo;
  const conteudo = document.createElement('pre');
  conteudo.textContent = typeof valor === 'string' ? valor : JSON.stringify(valor, null, 2);
  card.append(cabecalho, conteudo);
  const areaResultados = document.getElementById(parte);
  areaResultados.appendChild(card);
}

mostrar('parte1', '1.1 - Categorias', categorias);
mostrar('parte1', '1.2 - Códigos dos produtos', codigosProdutos);
mostrar('parte1', '1.2 - Fornecedores', fornecedores);
mostrar('parte1', '1.3 - Primeira categoria', categorias[0]);
categorias[1] = 'Calçados';
mostrar('parte1', '1.3 - Categorias atualizadas', categorias);

categorias.push('Livros');
mostrar('parte2', '2.1 - Após push', [...categorias]);
categorias.pop();
mostrar('parte2', '2.1 - Após pop', [...categorias]);
categorias.unshift('Brinquedos');
mostrar('parte2', '2.1 - Após unshift', [...categorias]);
categorias.shift();
mostrar('parte2', '2.1 - Após shift', [...categorias]);
mostrar('parte2', '2.2 - Tamanho do array', categorias.length);
mostrar('parte2', '2.3 - Índice de Calçados', categorias.indexOf('Calçados'));
mostrar('parte2', '2.3 - Contém Eletrônicos?', categorias.includes('Eletrônicos'));

const categoriasComFor = [];
for (let i = 0; i < categorias.length; i++) {
  console.log('3.1 - for:', categorias[i]);
  categoriasComFor.push(categorias[i]);
}
mostrar('parte3', '3.1 - Laço for tradicional', categoriasComFor);

const categoriasComForOf = [];
for (const categoria of categorias) {
  console.log('3.2 - for...of:', categoria);
  categoriasComForOf.push(categoria);
}
mostrar('parte3', '3.2 - Laço for...of', categoriasComForOf);

const produtos = [
  { nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
  { nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
  { nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

mostrar('parte4', '4.1 - Primeiro produto', produtos[0].nome);

const produtosBaratos = produtos.filter(produto => produto.preco < 300.00);
mostrar('parte4', '4.2 - Produtos baratos', produtosBaratos);
const precos = [50, 150, 200, 350, 400];
const multiplosDe100 = precos.filter(preco => preco % 100 === 0);
mostrar('parte4', '4.2 - Múltiplos de 100', multiplosDe100);

const quantidades = [2, 3, 5, 10];
const totalItens = quantidades.reduce((acumulador, quantidade) => acumulador + quantidade, 0);
mostrar('parte4', '4.3 - Total de itens', totalItens);
const valorTotalEstoque = produtos.reduce(
  (acumulador, produto) => acumulador + produto.preco * produto.estoque, 0
);
mostrar('parte4', '4.3 - Valor total do estoque', 'R$ ' + valorTotalEstoque.toFixed(2));

const precosOriginais = [100, 200, 300];
const precosComDesconto = precosOriginais.map(preco => preco * 0.9);
mostrar('parte4', '4.4 - Preços com desconto', precosComDesconto);
const nomesProdutos = produtos.map(produto => produto.nome);
mostrar('parte4', '4.4 - Nomes dos produtos', nomesProdutos);

const produtosOrdenados = produtos.slice().sort((a, b) => a.preco - b.preco);
mostrar('parte4', '4.5 - Produtos ordenados', produtosOrdenados);

const existeEstoqueBaixo = produtos.some(produto => produto.estoque < 5);
mostrar('parte4', '4.6 - Existe estoque menor que 5?', existeEstoqueBaixo);
const inventario = [
  { nome: 'Teclado', estoque: 15 },
  { nome: 'Mouse', estoque: 2 },
  { nome: 'Headset', estoque: 10 }
];
const existeEstoqueCritico = inventario.some(produto => produto.estoque < 5);
const primeiroProdutoCritico = inventario.find(produto => produto.estoque < 5);
mostrar('parte4', '4.6 - Existe estoque crítico?', existeEstoqueCritico);
mostrar('parte4', '4.6 - Primeiro produto crítico', primeiroProdutoCritico);

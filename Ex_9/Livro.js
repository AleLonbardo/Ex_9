// Definir uma função construtora para o objeto Livro
function Livro(titulo, autor, valor) {
    this.titulo = titulo;
    this.autor = autor;
    this.valor = valor;

    // Método ToString para imprimir os detalhes do livro
    this.ToString = function () {
        return "Título: " + this.titulo + ", Autor: " + this.autor + ", Valor: " + this.valor;
    }
}

// Solicitar ao usuário para cadastrar um livro
var tituloLivro = prompt("Digite o título do livro:");
var autorLivro = prompt("Digite o autor do livro:");
var valorLivro = parseFloat(prompt("Digite o valor do livro:"));

// Criar um objeto Livro com os detalhes fornecidos
var livroCadastrado = new Livro(tituloLivro, autorLivro, valorLivro);

// Imprimir os detalhes do livro usando o método ToString
console.log(livroCadastrado.ToString());

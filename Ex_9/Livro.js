// Definir uma fun��o construtora para o objeto Livro
function Livro(titulo, autor, valor) {
    this.titulo = titulo;
    this.autor = autor;
    this.valor = valor;

    // M�todo ToString para imprimir os detalhes do livro
    this.ToString = function () {
        return "T�tulo: " + this.titulo + ", Autor: " + this.autor + ", Valor: " + this.valor;
    }
}

// Solicitar ao usu�rio para cadastrar um livro
var tituloLivro = prompt("Digite o t�tulo do livro:");
var autorLivro = prompt("Digite o autor do livro:");
var valorLivro = parseFloat(prompt("Digite o valor do livro:"));

// Criar um objeto Livro com os detalhes fornecidos
var livroCadastrado = new Livro(tituloLivro, autorLivro, valorLivro);

// Imprimir os detalhes do livro usando o m�todo ToString
console.log(livroCadastrado.ToString());

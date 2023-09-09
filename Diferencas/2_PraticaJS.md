``` bash

class Pessoa {
    constructor(nome, anoNascimento) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    getNome() {
        return this.nome;
    }

    calcularIdade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoNascimento;
    }
}

const pessoa = new Pessoa("Bob", 1985);
console.log("Nome: " + pessoa.getNome());
console.log("Idade: " + pessoa.calcularIdade() + " anos");

```

### Neste exemplo em JavaScript:

## Usamos a sintaxe de classe para criar a classe Pessoa com construtor e métodos.
## Definimos um construtor para inicializar nome e anoNascimento.
Implementamos métodos getNome() e calcularIdade().
Criamos uma instância da classe Pessoa e exibimos o nome e a idade.
Ambos os exemplos são implementados de maneira semelhante em termos de POO, mas as diferenças na sintaxe e na forma como as classes são definidas refletem as particularidades de cada linguagem. Java é fortemente tipado e usa o método LocalDate para trabalhar com datas, enquanto JavaScript é fracamente tipado e usa o objeto Date para a mesma finalidade.


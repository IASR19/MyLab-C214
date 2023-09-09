``` bash
import java.time.LocalDate;
import java.time.Period;

public class Pessoa {
    private String nome;
    private int anoNascimento;

    public Pessoa(String nome, int anoNascimento) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    public String getNome() {
        return nome;
    }

    public int calcularIdade() {
        int anoAtual = LocalDate.now().getYear();
        return anoAtual - anoNascimento;
    }

    public static void main(String[] args) {
        Pessoa pessoa = new Pessoa("Alice", 1990);
        System.out.println("Nome: " + pessoa.getNome());
        System.out.println("Idade: " + pessoa.calcularIdade() + " anos");
    }
}
```


## Neste exemplo em Java:

### Criamos uma classe Pessoa com atributos privados nome e anoNascimento.
Definimos um construtor para inicializar esses atributos.
Implementamos métodos para obter o nome (getNome()) e calcular a idade (calcularIdade()).
No método main, criamos uma instância da classe Pessoa e exibimos o nome e a idade.
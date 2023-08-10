/*Aqui, estamos definindo a classe Aluno com um construtor. 
O construtor é um método especial que é chamado quando um objeto é criado a partir da classe. 
Ele inicializa as propriedades do objeto Aluno, 
como nome (o nome do aluno) e notas (um array para armazenar as notas do aluno).*/
class Aluno {
  constructor(nome) {
    this.nome = nome;
    this.notas = [];
  }

  adicionarNota(nota) {
    this.notas.push(nota);
    console.log(`Nota ${nota} adicionada para o aluno ${this.nome}.`);
  }

  /*O método adicionarNota permite adicionar uma nota ao array notas do aluno. 
  Ele também exibe uma mensagem informando qual nota foi adicionada para qual aluno.*/

  calcularMedia() {
    if (this.notas.length === 0) {
      console.log('O aluno não possui notas para calcular a média.');
      return 0;
    }

    const somaNotas = this.notas.reduce((total, nota) => total + nota, 0);
    const media = somaNotas / this.notas.length;
    return media.toFixed(2);
  }

  /* O método calcularMedia calcula a média das notas do aluno. 
  Ele verifica se o aluno possui notas e, caso contrário, 
  exibe uma mensagem informando que não há notas para calcular. Caso haja notas, 
  ele calcula a média somando todas as notas e dividindo pelo número de notas. 
  A função toFixed(2) é usada para arredondar a média para duas casas decimais.*/

  verificarAprovacao(mediaMinima = 60) {
    const media = this.calcularMedia();
    if (media >= mediaMinima) {
      return `${this.nome} foi aprovado com média ${media}.`;
    } else {
      return `${this.nome} foi reprovado com média ${media}.`;
    }
  }
}

/*O método verificarAprovacao verifica se o aluno foi aprovado com base em sua média. 
Ele recebe um parâmetro mediaMinima que define a média mínima para aprovação (por padrão, é 60). 
O método chama calcularMedia para obter a média do aluno e compara com a média mínima. 
Em seguida, retorna uma mensagem indicando se o aluno foi aprovado ou reprovado, 
juntamente com sua média*/

// Criando objetos da classe Aluno
const aluno1 = new Aluno('João');
const aluno2 = new Aluno('Maria');

// Add notas
aluno1.adicionarNota(10);
aluno1.adicionarNota(100);
aluno2.adicionarNota(50);
aluno2.adicionarNota(90);

// Calcula media e verifica aprovação
console.log(aluno1.verificarAprovacao());
console.log(aluno2.verificarAprovacao());

/*Aqui, criamos dois objetos aluno1 e aluno2 da classe Aluno, 
fornecendo seus nomes como argumentos para o construtor. 
Em seguida, usamos o método adicionarNota para adicionar notas aos alunos. 
Finalmente, chamamos o método verificarAprovacao para verificar se os alunos foram aprovados 
com base em suas médias e exibimos o resultado.*/
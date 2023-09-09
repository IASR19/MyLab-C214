## Estrutura e Sintaxe

### Java

#### Sintaxe de Classe
- Utiliza a palavra-chave `class` para definir uma classe.
- Requer que a classe seja definida em um arquivo separado com o nome da classe correspondente.

#### Construtor
- O construtor é definido com o nome da classe.
- Não retorna explicitamente um objeto.

#### Declaração de Variáveis
- Requer declaração de tipo de variável explicitamente. Exemplo: `private String nome;`

#### Acesso a Atributos
- Usa a palavra-chave `this` para acessar atributos da classe. Exemplo: `this.nome = nome;`

#### Métodos
- Métodos devem ser declarados com um tipo de retorno explícito ou `void`. Exemplo: `public String getNome() { ... }`

#### Obtenção do Ano Atual
- Utiliza a classe `LocalDate` para obter o ano atual. Exemplo: `int anoAtual = LocalDate.now().getYear();`


# ------------------------------////-----------------------------------

### JavaScript

#### Sintaxe de Classe
- Também utiliza a palavra-chave `class` para definir uma classe.
- Não requer um arquivo separado com o nome da classe.

#### Construtor
- O construtor tem o nome "constructor".
- Não especifica o tipo de retorno. Exemplo: `constructor(nome, anoNascimento) { ... }`

#### Declaração de Variáveis
- Não requer declaração de tipo de variável explicitamente.

#### Acesso a Atributos
- Usa `this` de maneira semelhante para acessar atributos. Exemplo: `this.nome = nome;`

#### Métodos
- Não é necessário declarar o tipo de retorno. Exemplo: `getNome() { ... }`

#### Obtenção do Ano Atual
- Usa o objeto `Date` para obter o ano atual. Exemplo: `const anoAtual = new Date().getFullYear();`

## Considerações Finais

Essas são algumas das principais diferenças estruturais e de sintaxe entre os exemplos em Java e JavaScript. Embora ambos os exemplos atinjam o mesmo objetivo de programação orientada a objetos, essas diferenças refletem as particularidades de cada linguagem e sua abordagem para a POO.

A escolha entre Java e JavaScript dependerá do contexto do projeto e das preferências pessoais, mas é importante entender as nuances de cada linguagem para fazer a escolha certa para uma tarefa específica.

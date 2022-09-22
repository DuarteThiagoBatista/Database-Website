<template>
  <div class="modelos">
    <h1 class="title">Modelos</h1>
    <div class="container">
      <h3>
        1. Modelo relacional
      </h3>
      <p class="text">
          O modelo mais comum, o modelo relacional, classifica dados em tabelas, também conhecidas como relações, cada uma das quais consiste em colunas e linhas. Cada coluna lista um atributo da entidade em questão, como preço, código postal ou data de nascimento. Juntos, os atributos em uma relação são chamados de domínio. Um determinado atributo ou combinação de atributos é escolhido como uma chave primária que pode ser consultada em outras tabelas, quando é chamada de chave estrangeira.
          Cada linha, também chamada de tupla, inclui dados sobre uma instância específica da entidade em questão, como um determinado colaborador.
          O modelo foi introduzido por E. F. Codd em 1970.
      </p>
      <img class="img" src="src\views\img\modelo_relacional.jpg" alt="" height="500">
    </div>
    <div class="container">
      <h3>
        2. Modelo hierárquico
      </h3>
      <p>
          O modelo hierárquico organiza dados em uma estrutura do tipo árvore, onde cada registro tem um único "pai" ou raiz. Registros "irmãos" são classificados em uma ordem específica. Essa ordem é usada como a ordem física para armazenar o banco de dados. Este modelo é bom para descrever muitas relações do mundo real.
          Esse modelo foi usado principalmente pelos Sistemas de Gestão de Informações da IBM nos anos 60 e 70, mas são raramente vistos hoje devido a certas ineficiências operacionais.   
      </p>
      <img class="img" src="src\views\img\modelo_hierarquico.jpg" alt="" height="300">
    </div>
    <div class="container">
      <h3>
        3. Modelo de rede
      </h3>
      <p>
          O modelo de rede se baseia no modelo hierárquico, permitindo relações muitas para muitas entre registros vinculados, implicando em vários registros "pai". Baseado na teoria de conjuntos matemáticos, o modelo é construído com conjuntos de registros relacionados. Cada conjunto consiste em um registro proprietário, ou "pai", e um ou mais registros de membro, ou "filho". Um registro pode ser um membro, ou "filho", em vários conjuntos, permitindo que esse modelo transmita relações complexas.
          Foi mais popular nos anos 70, depois de ter sido formalmente definido pela Conferência sobre Linguagens de Sistemas de Dados (CODASYL).    
      </p>
      <img class="img" src="src\views\img\modelo_rede.jpg" alt="" height="400">
    </div>
    <div class="container">
      <h3>
        4. Modelo de banco de dados orientado para objetos
      </h3>
      <p>
          Este modelo define o banco de dados como uma coleção de objetos, ou elementos de software reutilizáveis, com recursos e métodos associados. Há vários tipos de bancos de dados orientados para objetos:
          Um banco de dados multimídia incorpora mídia, como imagens, que não podem ser armazenadas em um banco de dados relacional.
          Um banco de dados de hipertexto permite que qualquer objeto seja vinculado a qualquer outro objeto. É útil para organizar lotes de dados diferentes, mas não é ideal para a análise numérica.
          O modelo de banco de dados orientado a objetos é o modelo de banco de dados pós-relacional mais conhecido, uma vez que ele incorpora tabelas, mas não se limita a elas. Tais modelos também são conhecidos como modelos de bancos de dados híbridos.
      </p>
      <img class="img" src="src\views\img\modelo_orientado_objetos.jpg" alt="" height="400">
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  color: hsla(160, 100%, 37%, 1);
}
.container {
  text-align: center;
  margin: 30px;
}
</style>

Construção de uma Aplicação Front Componentizada com React.js

### Contextualização do Problema

A empresa FitnessTracker é uma plataforma de gerenciamento de atividades físicas, onde os usuários podem registrar seus treinos, acompanhar seu progresso e obter recomendações de exercícios. A FitnessTracker está lançando uma nova versão do seu sistema e deseja que você desenvolva a interface front-end utilizando React.js.

Sua tarefa é criar uma aplicação React.js componentizada que implemente as funcionalidades básicas do FitnessTracker. A aplicação deve ser funcional e seguir boas práticas de desenvolvimento com React.js, incluindo a utilização de componentes funcionais, gerenciamento de estado, ciclo de vida e navegação.

Requisitos da Aplicação

Funcionalidades Principais:

### Página Inicial (Home):

- Exibir uma lista de treinos recomendados.
- Cada treino na lista deve exibir o nome do exercício, uma breve descrição e a duração.
- Um botão "Adicionar ao Meu Plano" deve estar disponível para cada treino.

### Página de Meu Plano:

- Exibir uma lista dos treinos que foram adicionados ao plano do usuário.
- Cada treino na lista deve exibir o nome do exercício, uma breve descrição e a duração.
- Um botão "Remover" deve estar disponível para cada treino na lista.

### Página Detalhes do Treino:

- Exibir os detalhes do treino com nome do exercício, descrição, duração e a data de conclusão (Se o treino tiver sido concluído).
- Um botão "Concluir Treino" deve estar disponível para concluir o treino e alterar seu status.

### Página de Histórico:

- Exibir uma lista dos treinos concluídos pelo usuário.
- Cada treino na lista deve exibir o nome do exercício, a duração e a data de conclusão.

### Navegação:

- Implementar navegação entre as páginas utilizando `react-router-dom`.

### Gerenciamento de Estado:

- Utilizar `useState` para gerenciar o estado necessários.

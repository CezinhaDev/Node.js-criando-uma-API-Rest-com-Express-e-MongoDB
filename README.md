API REST com Node.js, Express e MongoDB
Descrição
Este projeto é uma API REST desenvolvida com Node.js, utilizando o framework Express e o banco de dados MongoDB. A API foi construída do zero para fornecer uma estrutura robusta e escalável para aplicações web. Durante o desenvolvimento, foram abordados conceitos como requisições HTTP, CRUD (Create, Read, Update, Delete), e como conectar uma aplicação Node.js a um banco de dados MongoDB para armazenamento e busca de dados.

Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript no lado do servidor.

Express: Framework minimalista para Node.js, utilizado para criação de APIs de forma eficiente e escalável.

MongoDB: Banco de dados NoSQL utilizado para armazenamento dos dados da aplicação.

Mongoose: Biblioteca para modelar os dados no MongoDB e facilitar as interações com o banco de dados.

Funcionalidades
CRUD completo: Permite criar, ler, atualizar e deletar dados através de rotas HTTP.

Conexão com MongoDB: Conexão com o banco de dados MongoDB para persistir os dados.

Rotas RESTful: A API segue os princípios REST, utilizando os métodos HTTP adequados para cada ação.

Como Rodar o Projeto
Clonar o repositório:

bash
Copiar
Editar
git clone https://github.com/CezinhaDev/api-rest-node-express-mongodb.git
Instalar as dependências:

Dentro do diretório do projeto, instale as dependências:

bash
Copiar
Editar
cd api-rest-node-express-mongodb
npm install
Configurar o MongoDB:

Certifique-se de ter uma instância do MongoDB rodando. Você pode usar uma instância local ou uma solução em nuvem como o MongoDB Atlas.

Rodar o servidor:

bash
Copiar
Editar
npm start
O servidor estará rodando em http://localhost:3000.

Endpoints
GET /api/items: Retorna todos os itens.

POST /api/items: Cria um novo item.

GET /api/items/:id: Retorna um item específico pelo ID.

PUT /api/items/:id: Atualiza um item existente.

DELETE /api/items/:id: Deleta um item específico.

Contribuindo
Contribuições são bem-vindas! Se você deseja contribuir com melhorias ou correções, sinta-se à vontade para abrir um pull request.

Licença
Este projeto está licenciado sob a MIT License.

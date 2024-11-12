JWT Login
Este projeto implementa uma autenticação básica usando JSON Web Tokens (JWT) com Node.js, Express e Prisma, permitindo a criação de usuários, login e verificação de autenticação. Ele foi desenvolvido para facilitar o aprendizado sobre autenticação com JWT e é ideal para iniciantes.

Índice
Instalação
Configuração
Uso
Estrutura do Projeto
Rotas
Contribuição
Instalação
Clone o repositório:
bash
Copiar código
git clone https://github.com/JoaoCarv30/JWT_Login.git
Navegue até o diretório do projeto:
bash
Copiar código
cd JWT_Login
Instale as dependências:
bash
Copiar código
npm install
Configuração
Configure o Prisma e o banco de dados:

Certifique-se de ter o Prisma configurado com o banco de dados desejado.
Altere as informações de conexão no arquivo .env se necessário.
Rode as migrações para criar as tabelas no banco:

bash
Copiar código
npx prisma migrate dev
Uso
Inicie o servidor:
bash
Copiar código
npm run dev
O servidor estará em execução na porta 3000. Use um cliente como Postman ou Insomnia para testar as rotas de autenticação.
Estrutura do Projeto
src/index.ts - Configuração inicial do servidor e definição de middlewares.
src/routes.ts - Define as rotas de criação de usuário, login e listagem.
src/middlewares/auth.ts - Middleware que valida o token JWT.
src/controller/AuthController.ts - Controlador para autenticação e geração de token.
src/controller/UserController.ts - Controlador para criação e listagem de usuários.
Rotas
Autenticação
POST /auth - Faz login e gera um token JWT.
Body: { "email": "seuEmail", "password": "suaSenha" }
Criação de Usuário
POST /create - Cria um novo usuário.
Body: { "email": "seuEmail", "password": "suaSenha" }
Listagem de Usuários
GET /users - Lista todos os usuários (necessário um token JWT válido).
Headers: Authorization: Bearer <seuTokenJWT>
Contribuição
Sinta-se à vontade para fazer um fork do projeto e enviar um pull request! Qualquer contribuição para melhorar ou expandir o projeto é bem-vinda.

Esse README fornece um guia completo e de fácil entendimento para quem desejar utilizar ou contribuir para o projeto.

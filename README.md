# Documentação do Projeto JWT Login

Esta documentação fornece uma visão geral de cada arquivo no projeto JWT Login, explicando o que cada seção faz e usando analogias para facilitar o entendimento.

---

## 1. index.ts

**Descrição:**
Este é o arquivo principal que inicializa o servidor Express e configura o roteamento.

**Explicação detalhada e analogia:**
- `import express from 'express';` - Imagine o `express` como o construtor do servidor. Ele ajuda a construir a estrutura para processar requisições HTTP.
- `const app = express();` - Aqui, criamos o servidor. É como preparar o palco para um show, onde o servidor vai atuar.
- `app.use(express.json());` - Permite que o servidor interprete o corpo das requisições JSON, como se preparássemos o palco para receber diferentes formatos de conteúdo.
- `app.use(router);` - Configura as rotas usando o `router` que configuramos no `routes.ts`.
- `app.listen(3000, ...)` - Inicia o servidor na porta 3000. É como acender as luzes e começar o show, permitindo que o servidor receba requisições.

---

## 2. routes.ts

**Descrição:**
Define as rotas para criar usuário, autenticação (login) e listar usuários.

**Explicação detalhada e analogia:**
- `router.post("/create", ...)` - Esta rota permite a criação de um usuário. Imagine como um portão exclusivo onde só pessoas com permissão podem entrar e se cadastrar.
- `router.get("/users", AuthMiddleware, ...)` - Rota para listar usuários, mas apenas se o token JWT for válido. É como uma área VIP onde o segurança (middleware) verifica seu ingresso (token).
- `router.post("/auth", ...)` - Esta rota autentica o usuário, permitindo login e retorno de um token JWT.

---

## 3. auth.ts

**Descrição:**
Middleware para verificar o token JWT nas requisições protegidas.

**Explicação detalhada e analogia:**
- `const { authorization } = req.headers;` - Pega o token JWT do cabeçalho da requisição. É como verificar um ingresso na entrada.
- `if (!authorization)` - Se não houver um token, é como se o visitante não tivesse ingresso e, portanto, é barrado.
- `const decoded = verify(token, "secret");` - Verifica se o token é válido. É o ato do segurança confirmar que o ingresso é legítimo.
- `(req as any).userId = id;` - Salva o ID do usuário na requisição. Como se a segurança marcasse o visitante com um carimbo para acesso temporário.

---

## 4. AuthController.ts

**Descrição:**
Controlador de autenticação responsável pelo login e geração do token.

**Explicação detalhada e analogia:**
- `const { email, password } = req.body;` - Recebe email e senha. Pense nisso como o visitante apresentando uma identificação e senha.
- `const user = await prisma.user.findUnique(...);` - Procura o usuário no banco de dados. É como a segurança checando o cadastro do visitante.
- `const token = sign({ id: user.id }, "secret", { expiresIn: "1d" });` - Gera um token JWT, como entregar um crachá de acesso válido por 1 dia.
- `return res.json({ user: { id, email }, token });` - Responde com o token e dados do usuário, como o visitante receber o crachá com seus dados.

---

## 5. UserController.ts

**Descrição:**
Controlador responsável pela criação de usuários e listagem de usuários.

**Explicação detalhada e analogia:**
- `async create(req, res)` - Método para criar usuários.
  - `const userExists = await prisma.user.findUnique(...);` - Verifica se o usuário já existe, como um registro para evitar duplicatas.
  - `const hashedPassword = await hash(password, 8);` - Gera uma senha segura, como criptografar informações pessoais antes de armazená-las.
- `async index(req, res)` - Método para listar usuários registrados.

---

## Tecnologias Utilizadas

- **Express**: Framework para Node.js utilizado para criar o servidor e gerenciar rotas.
- **JWT (JSON Web Tokens)**: Usado para autenticação e verificação de usuários.
- **Prisma**: ORM para interagir com o banco de dados.
- **Bcryptjs**: Biblioteca usada para criptografar as senhas dos usuários.

---

## Como Rodar o Projeto

1. **Clonar o repositório**:
   ```bash
   git clone <url-do-repositório>

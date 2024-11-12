# 🚀 **Documentação do Projeto JWT Login** 

Bem-vindo à documentação do **Projeto JWT Login**! Aqui você encontrará uma explicação detalhada sobre os arquivos do projeto, com analogias e emojis para tornar o entendimento mais fácil e divertido! 😎

---

## 📝 **Sumário**

1. [index.ts](#1-indexts)
2. [routes.ts](#2-routests)
3. [auth.ts](#3-authts)
4. [AuthController.ts](#4-authcontrollerts)
5. [UserController.ts](#5-usercontrollerts)
6. [Tecnologias Utilizadas](#tecnologias-utilizadas)
7. [Como Rodar o Projeto](#como-rodar-o-projeto)
8. [Contribuindo](#contribuindo)
9. [Licença](#licença)

---

## 1. 🌐 **index.ts**

**Descrição:**  
Este é o arquivo principal que inicializa o servidor Express e configura o roteamento.  

**Explicação detalhada e analogia:**  
- `import express from 'express';` - O `express` é como o **arquiteto** do servidor. Ele ajuda a planejar e criar toda a estrutura para que o servidor possa processar requisições HTTP. 🏗️
- `const app = express();` - Aqui, estamos construindo o **palco** onde nosso servidor vai "atuar". 🎭
- `app.use(express.json());` - Habilita o servidor a entender e processar **dados no formato JSON**. 📦
- `app.use(router);` - Configura as rotas, como se fosse a **direção do tráfego** entre diferentes partes da aplicação. 🚦
- `app.listen(3000, ...)` - Acende as luzes e **inicia o show** no servidor, começando a receber requisições na porta 3000. 🎤

---

## 2. 📍 **routes.ts**

**Descrição:**  
Este arquivo define as rotas para **criar usuário**, **autenticação (login)** e **listar usuários**.

**Explicação detalhada e analogia:**  
- `router.post("/create", ...)` - Esta rota permite a **criação de um novo usuário**, como um **portão exclusivo** onde só quem tem permissão pode entrar e se cadastrar. 🚪🔑
- `router.get("/users", AuthMiddleware, ...)` - Para listar usuários, o **segurança (middleware)** verifica se o visitante tem o **ingresso (token JWT)** válido. 🛂
- `router.post("/auth", ...)` - A rota que **autentica o usuário**, retornando um **token JWT** para confirmar a identidade. 🆔

---

## 3. 🔒 **auth.ts**

**Descrição:**  
Middleware para **verificar o token JWT** nas requisições protegidas.

**Explicação detalhada e analogia:**  
- `const { authorization } = req.headers;` - Aqui pegamos o **token JWT** no cabeçalho da requisição, como **verificar um ingresso** na entrada. 🎟️
- `if (!authorization)` - Se o token não existir, é como se o visitante não tivesse ingresso e **não fosse permitido entrar**. 🚫
- `const decoded = verify(token, "secret");` - O **segurança** checa se o token é válido e não foi falsificado. 🔍
- `(req as any).userId = id;` - Como **carimbar** a entrada do visitante para dar acesso temporário, salvamos o ID do usuário. 🔏

---

## 4. 👤 **AuthController.ts**

**Descrição:**  
Controlador de autenticação responsável pelo **login** e **geração do token**.

**Explicação detalhada e analogia:**  
- `const { email, password } = req.body;` - Recebemos o **email** e a **senha** do usuário, como ele **apresentando sua identidade** e senha. 🆔🔑
- `const user = await prisma.user.findUnique(...);` - Procuramos o **usuário no banco de dados**, como um segurança verificando o cadastro. 📋
- `const token = sign({ id: user.id }, "secret", { expiresIn: "1d" });` - Geramos um **token JWT**, como entregar um **crachat** que dá acesso por 1 dia. 🎫
- `return res.json({ user: { id, email }, token });` - Devolvemos o **token** e os dados do usuário, como um visitante recebendo o crachá e os dados pessoais. 🎁

---

## 5. 🧑‍💻 **UserController.ts**

**Descrição:**  
Controlador responsável pela **criação de usuários** e **listagem de usuários**.

**Explicação detalhada e analogia:**  
- `async create(req, res)` - Método que **cria novos usuários**.
  - `const userExists = await prisma.user.findUnique(...);` - Verifica se o **usuário já existe**, como impedir o **registro duplicado**. 🚫
  - `const hashedPassword = await hash(password, 8);` - Gera uma **senha segura**, como **criptografar** para manter a privacidade. 🔒
- `async index(req, res)` - Método para **listar usuários registrados**, como uma **lista de membros** autorizados. 📜

---

## 🛠️ **Tecnologias Utilizadas**

- **Express**: Framework para **Node.js** usado para criar o servidor e gerenciar rotas. 🌍
- **JWT (JSON Web Tokens)**: Utilizado para **autenticação segura** e **verificação de usuários**. 🔑
- **Prisma**: ORM que facilita a interação com o banco de dados. 🛠️
- **Bcryptjs**: Biblioteca para **criptografar senhas** de forma segura. 🔐

---

## ⚡ **Como Rodar o Projeto**

1. **Clonar o repositório**:
   ```bash
   git clone <url-do-repositório>

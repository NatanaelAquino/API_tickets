# 🎫 API Tickets

API simples para gerenciamento de tickets de suporte, desenvolvida em **Node.js puro** (sem frameworks).  
Este projeto foi construído como prática do curso da [Rocketseat](https://rocketseat.com.br/).

---

## 📖 Visão geral

A API expõe endpoints HTTP para **criar, listar, atualizar, fechar e remover tickets**.  
Os dados são persistidos em um arquivo JSON (`src/database/db.json`) por meio de uma classe `Database` simples.

### Principais características
- Roteamento customizado (`src/router`) com suporte a parâmetros de rota.
- Middlewares para parsing de JSON e roteamento.
- Armazenamento local em arquivo (sem dependência de banco externo).
- Código totalmente em **Node.js nativo**, reforçando aprendizado da base.

---

## ⚡ Requisitos

- [Node.js](https://nodejs.org/) **18+**  
(O projeto utiliza `node --watch` no script de desenvolvimento)

---

## 📂 Estrutura do projeto

```

src/
├── controller/tickets     # Controladores de CRUD de tickets
├── database/database.js   # Persistência em JSON
├── middlewares            # Middlewares de JSON e roteamento
├── router                 # Definição de rotas
└── server.js              # Ponto de entrada (porta 3333)

````

---

## ▶️ Como executar

1. Clone o repositório:
   ```bash
   git clone (https://github.com/NatanaelAquino/API_tickets/tree/main)
````

2. Acesse a pasta:

   ```bash
   cd api
   ```

3. Instale dependências (se houver):

   ```bash
   npm install
   ```

4. Inicie em modo desenvolvimento:

   ```bash
   npm run dev
   ```

O servidor estará disponível em:
👉 `http://localhost:3333`

---

## 📌 Endpoints

### 1) Criar ticket

* **POST** `/tickets`
* **Body (JSON):**

```json
{
  "equipamento": "Nome do equipamento",
  "description": "Descrição do problema",
  "user_name": "Nome do usuário"
}
```

* **Resposta:** `201 Created` com o objeto do ticket criado.

---

### 2) Listar tickets

* **GET** `/tickets`
* **Query params opcionais:**

  * `status=open`
  * `status=closed`
* **Resposta:** `200 OK` com um array de tickets.

---

### 3) Atualizar ticket

* **PUT** `/tickets/:id`
* **Body (JSON):**

```json
{
  "equipamento": "Novo nome",
  "description": "Nova descrição"
}
```

* Atualiza os campos e `updated_at`.
* **Resposta:** `200 OK`.

---

### 4) Fechar ticket

* **PATCH** `/tickets/:id/closed`
* **Body (JSON):**

```json
{
  "solution": "Descrição da solução aplicada"
}
```

* Define `status = closed` e adiciona `solution`.
* **Resposta:** `200 OK`.

---

### 5) Remover ticket

* **DELETE** `/tickets/:id`
* **Resposta:** `200 OK`.

---

## 🖥️ Exemplos (PowerShell / curl)

Criar ticket:

```powershell
curl -Method POST -Uri http://localhost:3333/tickets -ContentType 'application/json' -Body (ConvertTo-Json @{
  equipamento = 'Impressora Epson'
  description = 'Não imprime'
  user_name   = 'João'
})
```

Listar abertos:

```powershell
curl http://localhost:3333/tickets?status=open
```

Fechar ticket:

```powershell
curl -Method PATCH -Uri http://localhost:3333/tickets/<id>/closed -ContentType 'application/json' -Body (ConvertTo-Json @{
  solution = 'Troca do cartucho e limpeza do cabeçote'
})
```

---

## ⚠️ Limitações atuais

* Persistência em arquivo simples (`db.json`) → não adequado para produção.
* Falta de validação robusta de payloads.
* Sem testes automatizados.

---

## 🚀 Próximos passos

* Adicionar **validações** e tratamento de erros.
* Implementar **testes unitários e de integração**.
* Migrar para banco real (**SQLite/Postgres**) para persistência confiável.

---

## 👨‍💻 Autor

Desenvolvido por **Natanael Aquino**
Projeto de prática do curso **Rocketseat** 🚀




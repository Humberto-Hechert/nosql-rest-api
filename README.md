
# API REST Node.js com Express e MongoDB

API construída em Node.js com o framework Express e o banco de dados MongoDB utilizando o Mongoose. Além disso, a API possui testes automatizados e de integração implementados utilizando o Jest e o Supertest.

# Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

Node.js

MongoDB


## Dependências

**Desenvolvimento:** 

{

    "jest": "^29.5.0",
    "nodemon": "^2.0.22",
    "supertest": "^6.3.3"

}

**Produção:**
{

    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "mongoose": "^7.2.4"

}


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MONGO_USER`

`MONGO_PASSWORD`

`PORT`


## Instalação

- Clone o repositório ou faça o download do código fonte.
- Navegue até o diretório raiz do projeto.
- Execute o seguinte comando para instalar as dependências:

```bash
  npm install
```
- Para iniciar o servidor, execute o seguinte comando:

```bash
  npm run dev
```

A API estará disponível em http://localhost:3080 por padrão, a menos que você tenha definido uma porta diferente na variável de ambiente PORT no arquivo .env.
## Documentação da API de Jogadores

#### Retorna todos os jogadores

```http
  GET /players
```

#### Retorna um jogador específico

```http
  GET /players/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do jogador que você quer |

#### Atualiza atributos de um jogador específico

-Passe a chave e valor do atributo como JSON no body da requisição. Exemplo:

{

    "name": "Ronaldinho Gaúcho"

}

```http
  PUT /players/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do jogador que você quer |

#### Adiciona um novo jogador

-Passe a chave e valor de todos os atributos como JSON no body da requisição. Exemplo:

{

    "name": "Nome do jogador",
    "country": "País do jogador",
    "team": "Time no qual joga",
    "age": 25

}

```http
  POST /players
```

#### Remove um jogador específico

```http
  DELETE /players/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do jogador que você quer |

## Documentação da API de Times

#### Retorna todos os times

```http
  GET /teams
```

#### Retorna um time específico

```http
  GET /teams/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do time que você quer |

#### Atualiza atributos de um time específico

-Passe a chave e valor do atributo como JSON no body da requisição. Exemplo:

{

    "name": "Barcelona"

}

```http
  PUT /teams/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do time que você quer |

#### Adiciona um novo time

-Passe a chave e valor de todos os atributos como JSON no body da requisição. Exemplo:

{

    "name": "Nome do time",
    "country": "País do time",
    "creationDate": 1910

}

```http
  POST /teams
```

#### Remove um time específico

```http
  DELETE /teams/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do time que você quer |



## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```


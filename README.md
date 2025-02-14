# Instruções do projeto

Este aplicativo tem como objetivo exibir uma lista de marcas de carros, permitindo que o usuário explore cada marca individualmente e visualize seus respectivos modelos.

# 📱 Demonstração da Aplicação

<p align="center">

https://github.com/user-attachments/assets/400bf60b-deec-4787-a6c1-59aeeca1fe6a

</p>

## 🛠 Tecnologias

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Context API](https://reactjs.org/docs/context.html)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [Styled Components](https://styled-components.com/)
- [React Navigation](https://reactnavigation.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Axios](https://axios-http.com/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

Essas ferramentas foram selecionadas para garantir um desenvolvimento eficiente, estruturado e com boas práticas, seguindo os requisitos do desafio.

## 🚀 Como rodar o projeto

```bash
# Clone este repositório
$ git clone git@github.com:hiag0liveira/car-listing-app.git

# Acesse a pasta do projeto no terminal/cmd
$ cd car-listing-app

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start
```

# 📥 Instruções de uso

Para logar no app usar o seguintes dados:

```bash
user: teste

senha: 123
```
### 📡 API Endpoints

#### 🔐 Login

- **URL:** `https://test-api-y04b.onrender.com/signIn`
- **Método:** `POST`
- **Parâmetros requeridos no body:** `user` e `password`

Exemplo de requisição:

```json
{
  "user": "teste",
  "password": "123"
}
```

**Resposta de sucesso:**

```json
{
  "token": "seu_token_aqui",
  "user": {
    "id": 1,
    "name": "Usuário Teste"
  }
}
```

Em caso de sucesso, os dados do usuário serão salvos no `Async Storage` e dentro do `Context API`. O usuário será redirecionado para a tela Home.

**Resposta de erro:**

```json
{
  "error": "Usuário ou senha incorretos"
}
```

Caso ocorra um erro, a mensagem de erro retornada será exibida para o usuário.

#### 🚗 Listagem de marcas de carros

- **URL:** `https://parallelum.com.br/fipe/api/v1/carros/marcas`
- **Método:** `GET`
- **Retorno esperado:**

```json
[
  {
    "codigo": "1",
    "nome": "Chevrolet"
  },
  {
    "codigo": "2",
    "nome": "Fiat"
  }
]
```

#### 🚙 Listagem de modelos por marca

- **URL:** `https://parallelum.com.br/fipe/api/v1/carros/marcas/{codigo}/modelos`
- **Exemplo:** `https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos`
- **Método:** `GET`
- **Retorno esperado:**

```json
{
  "modelos": [
    {
      "codigo": "1",
      "nome": "Onix"
    },
    {
      "codigo": "2",
      "nome": "Cruze"
    }
  ]
}
```

---

Desenvolvido por [Hiago Oliveira](https://www.linkedin.com/in/hiago-oliveira-520647212/)

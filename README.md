<p align="center">

  <h3 align="center">Market SD</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Lincense&message=MIT&color=0000ff " alt="License" />
</p>

<p align="center">
    Este projeto vale nota parcial da cadeira de Sistemas Distribuídos
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## 🗂 Table of Contents

* [Sobre o projeto](#book-sobre-o-projeto)
* [Instalação](#bricks-instalação)
  * [Pré-requisitos](#construction-pre-requisitos)
  * [Instalando dependências](#construction-instalando-dependencias)
  * [Rodando o Projeto](#arrow_forward-rodando-o-projeto)
* [Documentação](#bookmark_tabs-documentacao)
* [Licença](#page_facing_up-licença)
* [Autores](#woman_technologist-man_technologist-autores)

## :book: Sobre o projeto

Foi proposto a criação de um projeto em Node.js em REST que simulasse um sistema de supermercado delivery com as operações:  

  - [x] Listar os produtos disponível
  - [x] Colocar um produto no carrinho
  - [x] Remover um produto do carrinho
  - [x] Pagar o pedido
  - [x] Solicitar a entrega

## :bricks: Instalação

Este projeto usa [Node.js](https://nodejs.org/en/) e[Yarn](https://yarnpkg.com), você precisará deles para instalar as dependências.

### :construction: Pré-requisitos

Clone este repositório:
```bash

$ git clone https://github.com/3salles/delivery-rest.git

# Entre na pasta `delivery-rest`:

$ cd delivery-rest
```

🚨 Se você não possui git instalado em sua máquina, você pode instalá-lo [aqui](https://git-scm.com/downloads).


### :construction: Instalando dependências

Na pasta delivery-rest, instale as dependências pelo seguinte comando:

```bash
$ yarn install
```

### :arrow_forward: Rodando o Projeto

Rode os seguintes comando:

```bash

# Para o servidor

$ yarn server

```

A aplicação funcionará em `http://localhost:3333`.

Podendo ser visto em deploy no seguinte link: .

## :bookmark_tabs: Documentação

- Listar produtos
  
  > GET /products

  Retorna um JSON com a lista de produtos cadastrados

  ```json

  {
    "drinks":[
      {"id":0,"item":"Água","price":"1.90"},
      {"id":1,"item":"Chá","price":"6.90"},
      {"id":2,"item":"Café","price":"14.90"}
    ],
    "snacks":[
      {"id":0,"item":"Nikito","price":"2.00"},
      {"id":1,"item":"Fini","price":"4.45"},
      {"id":2,"item":"Barra de Chocolate","price":"5.00"}
    ],
    "food":[
      {"id":0,"item":"Arroz","price":"17.89"},
      {"id":1,"item":"Macarrão","price":"1.57"},
      {"id":2,"item":"Feijão","price":"6.90"}
    ]
  }
  ```

- Fazer um pedido
  
  > POST /order

  Envia uma requisição no seguinte formato:

  ```json

  {
    "category":"food",
    "id": "0"
  }

  ```

  E retorna a seguinte resposta:

  ```json

  {
    "orders":[
      {"id":0,"item":"Arroz","price":"17.89"}
    ],
    "total":17.89
  }

  ```

- Solicitar entrega

  > POST /address

  Envia uma requisição no seguinte formato:

  ```json

  {
    "street": "H",
   	"number": "03",
    "complement": "bloco D",
		"neighborhood": "Araçagi",
    "cep": "65138-000",
    "city": "Raposa",
    "state": "MA"
  }

  ```

  E retorna a seguinte resposta:

  ```json
  "Rua H, 03, bloco D, Araçagi. Raposa - MA. CEP: 65138-000"
  ```

- Pagar pedido

  > GET /payment

  Retorna o carrinho atual com os items de pedido, endereço de entrega e total a ser pago

  ```json

  {
    "orders":[
      {"id":0,"item":"Arroz","price":"17.89"}
    ],
    "total":17.89,
    "address":"Rua H, 03, bloco D, Araçagi. Raposa - MA. CEP: 65138-000"
  }

  ```

- Remover produto

  > DELETE /product/:category/:id

  Deve ser colocado nos parâmetros da rota a categoria do produto e o id e retorna a lista de produtos atualizada.

  Exemplo: > /product/drinks/0

  ```json

  {
    "drinks":[
      {"id":0,"item":"Água","price":"1.90"},
      {"id":1,"item":"Chá","price":"6.90"},
      {"id":2,"item":"Café","price":"14.90"}
    ],
    "snacks":[
      {"id":0,"item":"Nikito","price":"2.00"},
      {"id":1,"item":"Fini","price":"4.45"},
      {"id":2,"item":"Barra de Chocolate","price":"5.00"}
    ],
    "food":[
      {"id":0,"item":"Arroz","price":"17.89"},
      {"id":1,"item":"Macarrão","price":"1.57"},{"id":2,"item":"Feijão","price":"6.90"}
    ]
  }

  ```


## :page_facing_up: Licença

Este projeto usa a licença [MIT](https://github.com/3salles/user-crud/blob/main/LICENSE).

## :woman_technologist: :man_technologist: Autores

[Beatriz Salles](https://github.com/3salles)
<br/>
[Lucas Cléopas](https://github.com/DarkCleopas)



<p align="center">Developed with 💜</p>

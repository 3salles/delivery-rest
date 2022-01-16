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

Podendo ser visto em deploy no seguinte link: [https://market-sd.herokuapp.com](https://market-sd.herokuapp.com).
## :bookmark_tabs: Documentação

- Listar produtos
  
  > GET /products

  Retorna um JSON com a lista de produtos cadastrados

  ```json

	{
	"drinks": [
		{
			"id": 0,
			"imageURL": "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"name": "Chá",
			"price": 6.9
		},
		{
			"id": 1,
			"imageURL": "https://images.unsplash.com/photo-1641327512258-375610e81f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"name": "Café",
			"price": 14.9
		},
		{
			"id": 2,
			"imageURL": "https://images.unsplash.com/photo-1595641190867-138b14a23a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80",
			"name": "Achocolatado",
			"price": 13.62
		}
	],
	"snacks": [
		{
			"id": 3,
			"imageURL": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
			"name": "Nikito",
			"price": 2
		},
		{
			"id": 4,
			"imageURL": "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80",
			"name": "Fini",
			"price": 4.45
		},
		{
			"id": 5,
			"imageURL": "https://images.unsplash.com/photo-1626697556651-67ebdcb8cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
			"name": "Barra de Chocolate",
			"price": 5
		}
	],
	"food": [
		{
			"id": 6,
			"imageURL": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
			"name": "Arroz",
			"price": 17.89
		},
		{
			"id": 7,
			"imageURL": "https://images.unsplash.com/photo-1551462147-ff29053bfc14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"name": "Macarrão",
			"price": 1.57
		},
		{
			"id": 8,
			"imageURL": "https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
			"name": "Feijão",
			"price": 6.9
		}
	]
}

  ```

- Fazer um pedido
  
  > POST /order

  Envia uma requisição no seguinte formato:

  ```json

  {
    "category":"drinks",
    "id": "2"
	}
	
  ```

  E retorna a seguinte resposta:

  ```json

  {
		"id": 2,
		"imageURL": "https://images.unsplash.com/		photo-1595641190867-138b14a23a7a?ixlib=rb-1.2.1&		ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&		w=694&q=80",
		"name": "Achocolatado",
		"price": 13.62
	}

  ```

- Solicitar entrega

  > POST /address

  Envia uma requisição no seguinte formato:

  ```json

  {
    "address": "Rua H, 03",
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
	"orders": [
		{
			"id": 0,
			"imageURL": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
			"name": "Arroz",
			"price": 17.89
		}
	],
	"total": 17.89,
	"address": "Rua H, 03, bloco D, Araçagi. Raposa - MA. CEP: 65138-000"
}

  ```

- Remover produto

  > DELETE /product/:category/:id

  Deve ser colocado nos parâmetros da rota a categoria do produto e o id e retorna a lista de produtos atualizada.

  Exemplo: > /product/drinks/0

  ```json

  {
	"drinks": [
		{
			"id": 0,
			"imageURL": "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"name": "Chá",
			"price": 6.9
		},
		{
			"id": 1,
			"imageURL": "https://images.unsplash.com/photo-1641327512258-375610e81f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"name": "Café",
			"price": 14.9
		}
	],
	"snacks": [
		{
			"id": 0,
			"imageURL": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
			"name": "Nikito",
			"price": 2
		},
		{
			"id": 1,
			"imageURL": "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80",
			"name": "Fini",
			"price": 4.45
		},
		{
			"id": 2,
			"imageURL": "https://images.unsplash.com/photo-1626697556651-67ebdcb8cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
			"name": "Barra de Chocolate",
			"price": 5
		}
	],
	"food": [
		{
			"id": 0,
			"imageURL": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
			"name": "Arroz",
			"price": 17.89
		},
		{
			"id": 1,
			"imageURL": "https://images.unsplash.com/photo-1551462147-ff29053bfc14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"name": "Macarrão",
			"price": 1.57
		},
		{
			"id": 2,
			"imageURL": "https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
			"name": "Feijão",
			"price": 6.9
		}
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

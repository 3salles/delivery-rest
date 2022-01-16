//Mudança de netJS para Express
const express = require("express");
const app = express();
const porta = process.env.PORT || 3333;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

const products = {
  drinks: [
    {
      id: 0,
    imageURL:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Chá",
    price: 6.90
    },
    {
      id: 1,
    imageURL:
      "https://images.unsplash.com/photo-1641327512258-375610e81f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Café",
    price: 14.90
    },
    {
      id: 2,
    imageURL:
      "https://images.unsplash.com/photo-1595641190867-138b14a23a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80",
    name: "Achocolatado",
    price: 13.62
    },
  ],
  snacks: [
    {
      id: 3,
    imageURL:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
    name: "Nikito",
    price: 2.00
    },
    {
      id: 4,
    imageURL:
      "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80",
    name: "Fini",
    price: 4.45
    },
    {
      id: 5,
    imageURL:
      "https://images.unsplash.com/photo-1626697556651-67ebdcb8cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Barra de Chocolate",
    price: 5.00
    }
  ],
  food: [
    {
      id: 6,
    imageURL:
      "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Arroz",
    price: 17.89
    },
    {
      id: 7,
    imageURL:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Macarrão",
    price: 1.57
    },
    {
      id: 8,
    imageURL:
      "https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
    name: "Feijão",
    price: 6.90
    },
  ],
};

let cart = {
  orders: [],
  total: 0,
};

// List products
app.get("/products", (req, res) => {
  res.send(JSON.stringify(products));
});

// Make a order
app.post("/order", (req, res) => {
  const { category, id } = req.body;
  let item;

  for (let i = 0, size = products[`${category}`].length; i < size; i++) {
    if (products[`${category}`][i].id == id) {
      item = {...products[`${category}`][i]};
      console.log(item);
    }
  }
  cart.orders.push(item);
  let value = parseFloat(item.price);
  //console.log(valor)
  cart.total = cart.total + value;
  res.send(JSON.stringify(item));
});

// Add address delivery
app.post("/address", (req, res) => {
  const { address, complement, neighborhood, cep, city, state } =
    req.body;
  const newAddress = `${address}, ${complement}, ${neighborhood}. ${city} - ${state}. CEP: ${cep}`;

  cart.address = newAddress;

  res.send(JSON.stringify(cart.address));
});

// Pay order
app.get("/payment", (req, res) => {
  res.send(JSON.stringify(cart));
});

// Delete order
app.delete("/product/:category/:id", (req, res) => {
  const category = req.params.category;
  const id  = req.params.id;

  products[`${category}`].splice(products[`${category}`].indexOf(`id: ${id}`), 1);

  res.send(JSON.stringify(products));
})

app.listen(porta, () => {
  console.log(`🚀 Servidor inicializado na porta ${porta}!`);
});

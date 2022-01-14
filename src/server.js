//Mudança de netJS para Express
const express = require("express");
const app = express();
const porta = process.env.PORT || 3333;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const products = {
  drinks: [
    { id: 0, item: "Água", price: "1.90" },
    { id: 1, item: "Chá", price: "6.90" },
    { id: 2, item: "Café", price: "14.90" },
    { id: 3, item: "Achocolatado", price: "13.62" },
  ],
  snacks: [
    { id: 0, item: "Nikito", price: "2.00" },
    { id: 1, item: "Fini", price: "4.45" },
    { id: 2, item: "Barra de Chocolate", price: "5.00" },
  ],
  food: [
    { id: 0, item: "Arroz", price: "17.89" },
    { id: 1, item: "Macarrão", price: "1.57" },
    { id: 2, item: "Feijão", price: "6.90" },
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
      item = products[`${category}`][i];
      console.log(item);
    }
  }
  cart.orders.push(item);
  let value = parseFloat(item.price);
  //console.log(valor)
  cart.total = cart.total + value;
  res.send(JSON.stringify(cart));
});

// Add address delivery
app.post("/address", (req, res) => {
  const { street, number, complement, neighborhood, cep, city, state } =
    req.body;
  const address = `Rua ${street}, ${number}, ${complement}, ${neighborhood}. ${city} - ${state}. CEP: ${cep}`;

  cart.address = address;

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

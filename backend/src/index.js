const express = require("express");
const server = express();
const axios = require("axios");
const env = require("dotenv");
const {cache} =require("../cache");
const cors = require("cors");

//declarando aca hace el matcheo con el Puerto
const enviroment = env.config()

//middlewere
server.use(cors())



//Peticion a la Api y se guarda dentro de un arreglo con determinados datos
server.get("/api/search/:q"/*,cache(20)*/ ,(req,res)=>{
  const product = req.params.q
 // const regex = /-I/;
axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
.then((product) => {
  const result = product.data.results;
  if (result.length > 0) {
    let products = result.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        currency_id: product.currency_id,
        available_quantity: product.available_quantity,
        thumbnail: product.thumbnail,
        condition: product.condition,
        permalink : product.permalink 
      };
    });
    res.status(200).send(products);
  } 
  else {
    throw "Product not found.";
  }
})
.catch((err) => {
  res.status(404).send(err);
});
});


server.get("/api/categories",cache(20), (req, res) => {
    axios.get('https://api.mercadolibre.com/sites/MLA/categories')
    .then(({data}) => {
      res.status(200).send(data)
    }
    )
    .catch((err) =>{
      res.status(404).send(err);
    })
  });
/*

  server.get("/api/seller",  (req, res) => {
    const id = req.body.id
  
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?seller_id=${id}`)
    .then(({data}) => {
      res.status(200).send(data)
    }
    )
    .catch((err) =>{
      res.status(404).send(err);
    })
  });

*/

server.listen(process.env.PORT, () =>{
    console.log(`Server funcionando en puerto ${process.env.PORT}`);
});

module.exports = server;
const { Router } = require('express');
const Order = require('../models/Order');

// export default Router.......
module.exports = Router() // app.post(....)

  // post 
  .post('/api/v1/orders', async (req, res) => {
    try {
      const order = await Order.insert(req.params.quantityOfItems);
      res.send(order);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  // get by id
  .get('/api/v1/orders/:id', async (req, res) => {
    try {
      const order = await Order.getById(req.params.id);
      req.send(order);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  // get all
  .get('/api/v1/orders/', async (req, res) => {
    try {
      const order = await Order.getAll();
      req.send(order);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  // update quantity

  // delete item by id

  // .put('/api/v1/orders/:id', async (req, res) => {
  //   try {
  //     const order = await Order.read(req.params.quantity);
  //   } catch(err) {
  //     res.status(500).send(err);
  //   }
  // })

  // .delete('/api/v1/orders/:id', async (req, res) => {
  //   try {
  //     const order = await Order.read(req.params.quantity);
  //   } catch(err) {
  //     res.status(500).send(err);
  //   }
  // })
  
;

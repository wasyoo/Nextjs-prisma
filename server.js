const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // custom handlers go here…
    // server.use(require('./routes'));

    server.get('/product/:id/:name', (req, res) => {
      console.log('server',req)
      const { id } = req.params;
      app.render(req, res, '/product', { ...req.query, id });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(7777, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:7777');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

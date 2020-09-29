import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 3001;
const app = express();

// Server side Render of the homeApp
app.get('/', (req, res) => {
    const homeApp = ReactDOMServer.renderToString(<App />);
  
    const indexFile = path.resolve('./build/index.html');
    
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, something went wrong!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${homeApp}</div>`)
      );
    });
  });
  
  app.use(express.static('./build'));
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

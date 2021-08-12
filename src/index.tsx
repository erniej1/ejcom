import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();


//Comment goes here//


ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
document.getElementById('root')


  
);


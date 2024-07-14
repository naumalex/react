import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AnimalDetails } from './components/AnimalDetails/AnimalDetails.tsx';
import { animalLoader } from './routes/animalLoader.tsx';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,

    children: [
      {
        path: 'details/:id',
        element: <AnimalDetails />,
        loader: animalLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

import App from '../App';
import { AnimalDetails } from '../components/AnimalDetails/AnimalDetails';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'details/:id',
        element: <AnimalDetails />,
      },
    ],
  },
];

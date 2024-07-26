import App from '../App';
import { AnimalDetails } from '../components/AnimalDetails/AnimalDetails';
import { animalLoader } from './animalLoader';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'details/:id',
        element: <AnimalDetails />,
        loader: animalLoader,
      },
    ],
  },
];

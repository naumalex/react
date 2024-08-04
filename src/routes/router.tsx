import { AnimalDetails } from '../components/AnimalDetails/AnimalDetails';
import { Root } from '../components/Root/Root';

export const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'details/:id',
        element: <AnimalDetails />,
      },
    ],
  },
];

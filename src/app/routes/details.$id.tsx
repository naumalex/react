import { json, LoaderFunction } from '@remix-run/node';
import { api } from '../../services/api';
import { useLoaderData } from '@remix-run/react';
import { AnimalDetails } from '../../components/AnimalDetails/AnimalDetails';

export const loader: LoaderFunction = async ({ params }) => {
  const data = await api.getAnimal(params.id || '1');
  return json(data);
};

export default function Details() {
  const data = useLoaderData<typeof loader>();
  return <AnimalDetails animal={data} />;
}

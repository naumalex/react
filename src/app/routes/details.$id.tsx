import { json, LoaderFunction } from '@remix-run/node';
import { api } from '../../services/api';
import { useLoaderData, useRouteLoaderData } from '@remix-run/react';
import { AnimalDetails } from '../../components/AnimalDetails/AnimalDetails';
import { Root } from '../../components/Root/Root';
import { INITIAL_PAGE_RESPONSE } from '../../utils/constants';
import { loader as rootLoader } from '../root';

export const loader: LoaderFunction = async ({ params }) => {
  const data = await api.getAnimal(params.id || '1');
  return json(data);
};

export default function Details() {
  const data = useLoaderData<typeof loader>();
  const animalsData =
    useRouteLoaderData<typeof rootLoader>('root') || INITIAL_PAGE_RESPONSE;
  return (
    <Root data={animalsData}>
      <AnimalDetails animal={data} />
    </Root>
  );
}

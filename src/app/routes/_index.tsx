import { json, LoaderFunction } from '@remix-run/node';
import { api } from '../../services/api';
import { useLoaderData } from '@remix-run/react';
import { Root } from '../../components/Root/Root';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '') - 1;
  const data = await api.getAnimals({
    filter: { name: url.searchParams.get('search') || '' },
    page: page,
  });
  return json(data);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return <Root data={data} />;
}

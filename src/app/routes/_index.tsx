import { useRouteLoaderData } from '@remix-run/react';
import { Root } from '../../components/Root/Root';
import { loader } from '../root';

export default function Index() {
  const data = useRouteLoaderData<typeof loader>('root');
  return <Root data={data} />;
}

import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import App from '../App';
import { json, LoaderFunction } from '@remix-run/node';
import { api } from '../services/api';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '') - 1;
  const data = await api.getAnimals({
    filter: { name: url.searchParams.get('search') || '' },
    page: page,
  });
  return json(data);
};

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <App />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

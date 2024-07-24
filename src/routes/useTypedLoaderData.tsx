import { useLoaderData } from 'react-router-dom';

export const useTypedLoaderData = <
  F extends (...args: Parameters<F>) => ReturnType<F>,
>() => {
  return useLoaderData() as Awaited<ReturnType<F>>;
};

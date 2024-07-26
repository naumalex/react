import { ListHeader } from '../ListHeader/ListHeader';

export function AnimalsListHeader() {
  const columnsHeaders = ['Name', 'Uid', 'Type'];
  return <ListHeader columnHeaders={columnsHeaders} />;
}

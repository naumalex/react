import { ListItem } from '../ListItem/ListItem';

export interface ListItemsProps<T> {
  data: T[];
  renderDetails: React.FC<T>;
  keyExtractor: (data: T) => string;
  idExtractor: (data: T) => string;
}

export function ListItems<T>({
  data,
  renderDetails,
  keyExtractor,
  idExtractor,
}: ListItemsProps<T>) {
  if (data.length === 0) {
    return <div>No data found</div>;
  }
  const listItems = data.map((item) => {
    return (
      <ListItem
        data={item}
        key={keyExtractor(item)}
        id={idExtractor(item)}
        renderDetails={renderDetails}
      />
    );
  });
  return listItems;
}

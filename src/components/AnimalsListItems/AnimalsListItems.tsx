import { ListItemsProps, ListItems } from '../ListItems/ListItems';
import { AnimalsListItem } from '../AnimalsListItem/AnimalsListItem';
import { Animal } from '../../services/api.types';
export type AnimalListItemsProps = Pick<ListItemsProps<Animal>, 'data'>;

export function AnimalsListItems({ data }: AnimalListItemsProps) {
  const renderDetails = (animal: Animal) => {
    return <AnimalsListItem animal={animal} />;
  };

  const keyExtractor = (animal: Animal) => animal.uid;
  const idExtractor = (animal: Animal) => animal.uid;
  return (
    <ListItems
      data={data}
      renderDetails={renderDetails}
      keyExtractor={keyExtractor}
      idExtractor={idExtractor}
    />
  );
}

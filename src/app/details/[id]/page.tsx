import App from 'src/App';
import { AnimalDetails } from 'src/components/AnimalDetails/AnimalDetails';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <App>
      <AnimalDetails uid={params.id} />
    </App>
  );
}

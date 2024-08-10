import { useRouter } from 'next/router';
import App from 'src/App';
import { AnimalDetails } from 'src/components/AnimalDetails/AnimalDetails';

const Page = () => {
  const router = useRouter();
  const id: string = router.query.id?.toString() || '';
  return (
    <App>
      <AnimalDetails uid={id} />
    </App>
  );
};

export default Page;

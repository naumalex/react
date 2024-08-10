import App from 'src/App';
import '../../index.css';

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  return <App />;
}

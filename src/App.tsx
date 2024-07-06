import './App.css';
import { Api } from './services/api';
import { SearchBar } from './components/SearchBar';

function App() {
  Api.getAnimals({ filter: { earthAnimal: true }, page: 2, limit: 10 });
  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;

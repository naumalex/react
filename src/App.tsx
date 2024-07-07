import './App.css';
import { Api } from './services/api';
import { SearchBar } from './components/SearchBar';
import React from 'react';

interface AppState {
  searchValue: string;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { searchValue: '' };
  }

  handleChangeSearchValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    Api.getAnimals({ filter: { earthAnimal: true }, page: 2, limit: 10 });
    return (
      <>
        <SearchBar
          searchValue={this.state.searchValue}
          onChange={this.handleChangeSearchValue.bind(this)}
        />
      </>
    );
  }
}

export default App;

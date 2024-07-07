import './App.css';
import { AnimalsPagedQueryResponse, Api } from './services/api';
import { SearchBar } from './components/search-bar/SearchBar';
import React from 'react';
import { SearchResultsList } from './components/results-list/Search-results-list';

interface AppState {
  searchValue: string;
  animalsPagedResponse?: AnimalsPagedQueryResponse;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { searchValue: '' };
  }

  async componentDidMount() {
    await this.loadData(this.state.searchValue);
  }

  handleChangeSearchValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
  }

  async loadData(name: string, page: number = 0) {
    const animals = await Api.getAnimals({
      filter: { name: name },
      page: page,
    });
    this.setState({ animalsPagedResponse: animals }, () =>
      console.log(this.state),
    );
  }

  async handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    await this.loadData(this.state.searchValue);
  }

  render() {
    return (
      <>
        <SearchBar
          searchValue={this.state.searchValue}
          onChange={this.handleChangeSearchValue.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
        />
        <SearchResultsList data={this.state.animalsPagedResponse} />
      </>
    );
  }
}

export default App;

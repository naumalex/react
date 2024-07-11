import './App.css';
import { AnimalsPagedQueryResponse, Api } from './services/api';
import { SearchBar } from './components/search-bar/SearchBar';
import React from 'react';
import { SearchResultsList } from './components/results-list/Search-results-list';
import { Loader } from './components/Loader/Loader';
import { ErrorBoundary } from './components/Error-boundary';

interface AppState {
  searchValue: string;
  animalsPagedResponse?: AnimalsPagedQueryResponse;
  loading: boolean;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const searchValue = localStorage.getItem('searchValue') || '';
    this.state = { searchValue: searchValue, loading: false };
  }

  async componentDidMount() {
    await this.loadData(this.state.searchValue);
  }

  handleChangeSearchValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value.trim() });
    localStorage.setItem('searchValue', event.target.value);
  }

  async loadData(name: string, page: number = 0) {
    this.setState({ loading: true });
    const animals = await Api.getAnimals({
      filter: { name: name },
      page: page,
    });
    this.setState({ animalsPagedResponse: animals, loading: false });
  }

  async handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    await this.loadData(this.state.searchValue);
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <SearchBar
            searchValue={this.state.searchValue}
            onChange={this.handleChangeSearchValue.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
          <SearchResultsList data={this.state.animalsPagedResponse} />
          <Loader loading={this.state.loading} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;

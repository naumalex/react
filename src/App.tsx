import './App.css';
import { ErrorBoundary } from './components/Error-boundary';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Root } from './components/Root/Root';
import PropTypes from 'prop-types';

App.propTypes = {
  children: PropTypes.node,
};

function App({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary>
          <Root>{children}</Root>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}
export default App;

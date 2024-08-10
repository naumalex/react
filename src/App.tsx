import './App.css';
import { ErrorBoundary } from './components/Error-boundary';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { Root } from './components/Root/Root';
import { StoreProvider } from './store/storeProvider';

interface AppProps {
  children?: React.ReactNode;
}

function App({ children }: AppProps) {
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
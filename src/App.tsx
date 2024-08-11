import './App.css';
import { ErrorBoundary } from './components/Error-boundary';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { StoreProvider } from './store/StoreProvider';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </ThemeProvider>
    </StoreProvider>
  );
}
export default App;

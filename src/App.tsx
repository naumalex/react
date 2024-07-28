import './App.css';
import { ErrorBoundary } from './components/Error-boundary';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { Root } from './components/Root/Root';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Root />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
export default App;

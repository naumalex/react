import './App.css';
import { ErrorBoundary } from './components/Error-boundary';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/router';

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
export default App;

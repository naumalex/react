import './App.css';
import { ErrorBoundary } from './components/Error-boundary';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/router';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter(routes);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}
export default App;

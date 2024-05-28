import {createBrowserRouter} from 'react-router-dom';
import { Layout } from './pages/routes/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/routes/NotFound';
import TransactionForm from './pages/TransactionForm/TransactionForm';


export const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'transaction-form',
        element: <TransactionForm />,
      },
      {
        path: 'Login',
        element: <Login />,
      },
    ],
  },
]);
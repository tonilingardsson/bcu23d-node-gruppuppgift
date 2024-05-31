import {createBrowserRouter} from 'react-router-dom';
import { Layout } from './pages/routes/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/routes/NotFound';
import TransactionForm from './pages/TransactionForm/TransactionForm';
import BlockchainPage from './pages/blockchainFetch/BlockchainPage';
import RegisterPage from './pages/registerPage/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/',
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
        path: 'login',
        element: <Login />,
      },
      {
        path: 'blockchain',
        element: <BlockchainPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);

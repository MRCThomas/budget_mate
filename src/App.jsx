import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './components/Template';
import Dashboard from './pages/Dashboard/Dashboard';
import BudgetForm from './pages/BudgetForm/BudgetForm';
import { AuthProvider } from './components/Auth/AuthProvider';
import PrivateRoute from './components/Auth/PrivateRoute';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Template />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: 'budget/:id',
        element: (
          <PrivateRoute>
            <BudgetForm />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

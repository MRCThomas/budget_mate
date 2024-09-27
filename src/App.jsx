import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/Template'
import Dashboard from './pages/Dashboard/Dashboard'
import BudgetForm from './pages/BudgetForm/BudgetForm'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: <Dashboard/>
      },
      {
        path: 'budget/:id',
        element: <BudgetForm />
      }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router} />
}

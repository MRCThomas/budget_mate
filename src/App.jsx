import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/Template'
import Dashboard from './pages/Dashboard/Dashboard'
import BudgetForm from './pages/BudgetForm/BudgetForm'
import AddExpense from './pages/AddExpense/AddExpense'

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
      },
      {
        path: 'add-expense',
        element: <AddExpense />
      }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router} />
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/Template'
import Dashboard from './pages/Dashboard/Dashboard'
import BudgetForm from './pages/BudgetForm/BudgetForm'
import SidebarMenu from "./SidebarMenu.jsx";

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
        path: '/sidebardev',
        element: <SidebarMenu />
      }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router} />
}

import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import App from 'App'
import Melting from './Melting/Melting'
import Element from './Element/Element'
import Dashboard from './Dashboard/Dashboard'
import ProcessOrder from './ProcessOrder/ProcessOrder'
import ProcessPlanner from './ProcessPlanner/ProcessPlanner'
import ProcessList from './ProcessList/ProcessList'
import Admin from './Admin/Admin'


const router = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <Root />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/processOrder',
        element: <ProcessOrder />,
      },
      {
        path: '/processPlanner',
        element: <ProcessPlanner />,
      },
      {
        path: '/processList',
        element: <ProcessList />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/melting',
        element: <Melting />,
      },
      {
        path: '/element',
        element: <Element />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
])

export default router

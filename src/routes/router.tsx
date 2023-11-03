import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Melting from './Melting/Melting'
import Element from './Element/Element'
import Dashboard from './Dashboard/Dashboard'
import ProcessOrder from './ProcessOrder/ProcessOrder'
import ProcessPlanner from './ProcessPlanner/ProcessPlanner'
import ProcessList from './ProcessList/ProcessList'
import Admin from './Admin/Admin'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
])

export default router

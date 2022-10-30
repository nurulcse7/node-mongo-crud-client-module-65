import { createBrowserRouter } from 'react-router-dom';
import AddUser from '../components/AddUser';
import Blog from '../components/Blog';
import Home from '../components/Home';
import Update from '../components/Update';
import Main from '../Main/Main';
import ErrorPage from '../NotFound/Error-page';


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/users')
          },
          {
            path: '/users/add',
            element: <AddUser></AddUser>
          },
          {
            path:'/update/:id',
            element: <Update></Update>, 
            loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
          },
          {
            path: '/blog',
            element: <Blog></Blog>,
          }
    ],
  },
]);

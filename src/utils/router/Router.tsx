import { createBrowserRouter } from 'react-router-dom';
import Body from '../../components/Body';
import Browse from '../../components/Browse';
import App from '../../App';
import Login from '../../components/Login';

export const Router = createBrowserRouter([
    {path: "/login", element: <App/>,
    children: [
        {path: "/login", element: <Login/>}
    ]},
    {path: "/browse", element: <Browse/>}
])



import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/main/Home';
import Forom from './component/forom/Forom';
import About from './about/About';
import User from './component/user/User';
import Userdatils from './component/user/Userdatils';
import Error from './errror/Error';



const router = createBrowserRouter([

{

path: '/',
element: <Home></Home>,
errorElement: <Error></Error>,
children:[{

path:'/about',
element: <About></About>



},

{

path: '/forom',
element: <Forom></Forom>

},
{

  path: '/user',
  loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
  element: <User></User>
},
{

  path: '/user/:id',
  loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
  element: <Userdatils></Userdatils>
}

]



}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)

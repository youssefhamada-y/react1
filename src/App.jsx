import { createBrowserRouter,createHashRouter, RouterProvider } from "react-router-dom"
import Layout from './Components/Layout/layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Notfound from './Components/Notfound/Notfound';




function App() {

let router= createHashRouter([
{
  path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'contact',element:<Contact/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:"*",element:<Notfound/>}
  ]
}
]
)
  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

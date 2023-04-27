import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

//pages
import Home from './pages/Home';
import About from './pages/About';

//layout
import RootLayout from './LayOut/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />} />
    </Route>
  )
)

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;

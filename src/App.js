import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  }
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;

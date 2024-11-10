import Header from './componants/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Footer from './componants/Footer/Footer';

import './App.css'
import { Outlet } from 'react-router-dom';


function App() {


  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default App

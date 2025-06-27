import './App.css';
import Home from './pages/Home';
import BuyCredit from './pages/BuyCredit';
import Result from './pages/Result';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Foot from './components/Foot';
import Login from './components/Login';
import { useContext } from 'react';
import { Appcontext } from './context/Appcontext';
  import { ToastContainer, toast } from 'react-toastify';


function App() {
  const{showlogin,setShowlogin}=useContext(Appcontext);
  return (
   

    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'></ToastContainer>
     <Navbar />
     {showlogin && <Login></Login>}
     <Routes>
        <Route path='/home' element={<Home />} />
       <Route path='/buy' element={<BuyCredit />} />
       <Route path='/result' element={<Result />} />
      </Routes>
     <Foot></Foot>
    </div>
  );
}

export default App;

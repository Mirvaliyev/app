import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Contact from './components/pages/Contact';
import Partners from './components/pages/Partners';
import ErrorPage from './components/pages/ErrorPage';

import './App.css';

function App() {
  return (
    <div className=' flex justify-self-stretch'>
      <BrowserRouter>
        <nav className='z-50 nav bg-amber-100 md:shadow-[20px_0px_30px_rgba(0,0,0,0.3)] shadow-[0px_-15px_30px_rgba(0,0,0,0.2)] border-t-[1px] md:border-t-[0px] md:border-r-[1px] border-gray-400 fixed flex items-center md:block bottom-0 w-full h-[60px] md:left-0 md:top-0 md:h-screen md:w-[130px]'>
          <Navbar />
        </nav>
        <main id='main' className='main fixed top-0 w-full h-[calc(100vh-60px)] md:right-0 md:top-0 md:h-screen md:w-[calc(100vw-130px)] p-[30px] bg-amber-100'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/works' element={<Works />} />
            <Route exact path='/partners' element={<Partners />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='*' element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

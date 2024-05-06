import { useState} from 'react'
import './App.css'
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
  

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;

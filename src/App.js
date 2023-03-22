import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Service from './Components/Service';
import Footer from './Components/Footer'
import Contact from './Components/Contact';


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

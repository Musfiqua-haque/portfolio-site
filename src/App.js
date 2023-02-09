import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Service from './Components/Service';
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default App;

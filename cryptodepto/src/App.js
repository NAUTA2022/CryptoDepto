import logo from './logo.svg';
import './App.css';
import Hero from './scripts/Hero.jsx';
import Nav from './scripts/Navbar.jsx';

function App() {
  return (
    <section className='container'>

    <div className='navbarContainer'>
    <Nav />
    </div>

    <div className="heroContainer">
    <Hero />
    </div>
    
    </section>
  );
}

export default App;

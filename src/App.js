import './App.css';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Carousel from './Components/Carousel';
function App() {
  return (
    <div className="App" >
      <Hero/>
      <Projects/>
      <Carousel/>
      <Contact/>
    </div>
  );
}

export default App;

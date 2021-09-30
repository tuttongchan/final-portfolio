import './index.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

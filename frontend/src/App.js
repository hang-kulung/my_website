import NavBar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about'; 
import Contract from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Project from './components/Project/project';
import Blog from './components/Blog/blog';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Project />
      <Blog />
      <Contract />
      <Footer />
    </div>
  );
}

export default App;

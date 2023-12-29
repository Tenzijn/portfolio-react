import './styles/App.css';
import NavbarMobile from './components/NavbarMobile';

const navLinks = ['Home', 'About', 'Projects', 'Contact'];

function App() {
  return (
    <>
      <NavbarMobile userName='Tenzin Kunchok' navLinks={navLinks} />
      <h1>Hello world! </h1>
      <h2>This is my portfolio</h2>
    </>
  );
}

export default App;

import './styles.css'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Portfolio from "./component/Portfolio";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function MyApp() {
  return (
    <div id="page-top">
        <Navbar/>
        <Header/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}
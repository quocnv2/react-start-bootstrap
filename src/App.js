import './styles.css'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Portfolio from "./component/Portfolio";

export default function MyApp() {
  return (
    <div id="page-top">
        <Navbar/>
        <Header/>
        <Portfolio/>
    </div>
  );
}
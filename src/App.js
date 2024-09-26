import './App.css';
import Header from "./Components/Navbar/Navbar"
import Router from './Router.js';
import Footer from './Components/Footer/Footer.jsx';

function App() {
    return (
        <div>
            <Header/>
            <Router/>
            <Footer/>
        </div>
    );
}

export default App;
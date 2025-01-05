import Navbar from "./components/Navbar"
import logo from './assets/logo/logo.png'
import './styles/app.css'

const viliriMenu = {
    logo: logo,
};

function App() {
    return (
        <div>
            <Navbar menu={viliriMenu} />
        </div>
    );
}

export default App

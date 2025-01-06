import Navbar from "./components/Navbar"
import HeroSearch from "./components/Hero"
import logo from './assets/logo/5.png'
import {libraryDatas} from "../src/data/libraryDatas"
import './styles/hero.css'
import Bookpopular from "./components/Bookpopular"

const genre = [... new Set(libraryDatas.map(livre => livre.genre))]
const auteur = [... new Set(libraryDatas.map(livre => livre.auteur))]
const title = [... new Set(libraryDatas.map(livre => livre.title))]
const books = libraryDatas.filter(book => book.status === true);

const viliriMenu = {
    logo: logo,
};

const search = {
    title: "L'évasion littéraire commence ici",
    description: "Une recherche précise pour des lecteurs exigeants",
    genre: genre,
    auteur: auteur,
    booktitle: title,
};

function App() {
    return (
        <section>
            <div className="cover-img">
            <div>
                <Navbar menu={viliriMenu} />
            </div>
            <div>
                <HeroSearch search={search} />
            </div>
            </div>
            <div>
                <Bookpopular books={books} />
            </div>
        </section>
    );
}

export default App

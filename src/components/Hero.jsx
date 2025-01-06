import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/hero.css'

function HeroSearch({search}) {
    return (
        <section className="index-hero">
            <div className="search-name">
                <h1>{search.title}</h1>
                <p>{search.description}</p>
            </div>
            <div className="search-criteria">
                <form action="" className='book-search' method='get'>
                    <select name="genre-litteraire" id="genre-litteraire">
                        <option value="" disabled selected>Genre littéraire</option>
                        {search.genre.map((genre, index) => (
                            <option key={index} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                    <select name="auteur" id="auteur">
                    <option value="" disabled selected>Auteur</option>
                        {search.auteur.map((auteur, index) => (
                            <option key={index} value={auteur}>
                                {auteur}
                            </option>
                        ))}
                    </select>
                    <select name="book-title" id="book-title" className='hidden'>
                    <option value="" disabled selected>Titre du livre</option>
                        {search.booktitle.map((book, index) =>(
                            <option key={index} value={book}>
                                {book}
                            </option>
                        ))}
                    </select>
                    <button type='submit'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                    </button>
                </form>
            </div>
        </section>
    )
}

HeroSearch.PropTypes = {
    search: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        genre: PropTypes.arrayOf(PropTypes.string).isRequired,
        auteur: PropTypes.arrayOf(PropTypes.string).isRequired,
        booktitle: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default HeroSearch;
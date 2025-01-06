import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/bookpopular.css'

function Bookpopular ({books}) {
    return (
        <section className="livres-populaires">
            <FontAwesomeIcon icon={faChevronLeft} className='icon-left'/>
            <div className="books-list">
                {books.map((book, index) => (
                    <div className="book" key={index}>
                        <img src={book.image} alt={book.title} />
                        <h3>{book.title}</h3>
                        <h4>{book.auteur}</h4>
                        <div className='notation'>
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                            ))}
                        </div>
                    </div>
                    ))}
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='icon-right'/>
        </section>
    )
}

Bookpopular.PropTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            auteur: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default Bookpopular;
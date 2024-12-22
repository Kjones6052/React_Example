import '../PortfolioStyles.css';
import { string } from 'prop-types';

const Header = ({ name='John Doe', title='Web Developer & Designer' }) => {
    return (
        <header>
            <h1>{name}</h1>
            <p>{title}</p>
        </header>
    );
};

Header.propTypes = {
    name: string,
    title: string
}

export default Header;
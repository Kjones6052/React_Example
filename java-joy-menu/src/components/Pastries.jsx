import { array } from 'prop-types';

const Pastries = ({ items }) => {
    return (
        <div>
            <h3>Pastries</h3>
            {items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    )
}

Pastries.defaultProps = {
    items: ['Croissant', 'Blueberry Muffin', 'Cinnamon Roll']
};

Pastries.propTypes = {
    items: array
}

export default Pastries;
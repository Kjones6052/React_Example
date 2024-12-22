import { array } from 'prop-types';

const Coffees = ({ items }) => {
    return (
        <div>
            <h3>Coffees</h3>
            {items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    )
}

Coffees.defaultProps = {
    items: ['Espresso', 'Cappuccino', 'Latte']
};

Coffees.propTypes = {
    items: array
}

export default Coffees;
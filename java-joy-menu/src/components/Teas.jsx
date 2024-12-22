import { array } from 'prop-types';

const Teas = ({ items }) => {
    return (
        <div>
            <h3>Teas</h3>
            {items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    )
}

Teas.defaultProps = {
    items: ['Green Tea', 'Chamomille Tea', 'Earl Grey Tea']
};

Teas.propTypes = {
    items: array
}

export default Teas;
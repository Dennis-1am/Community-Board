import React from 'react';
import PropTypes from 'prop-types';
import './components_styles/eventCard.css';

const EventCard = (props) => {
    return (
        <div className="event-card">
            <div className="event-card__image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="event-card__content">
                <h3 className="event-card__title">{props.title}</h3>
                <p className="event-card__description">{props.description}</p>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default EventCard;


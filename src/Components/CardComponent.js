import React from 'react';
import classes from './Components.module.css';

const CardComponent = ({num}) => {
    
    return (
        <div className={classes.card}>
            <div className={classes.cardnum}>
                {num}
            </div>
        </div>
    )
}

export default CardComponent;
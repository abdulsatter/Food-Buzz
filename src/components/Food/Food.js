import React from 'react';
import './Food.css'

const Food = (props) => {
    const { strMeal, strMealThumb } = props.meal;
    return (
<section className='main'>
        <div className='food-container'>
            <div className='img'>
                <img src={strMealThumb} alt="" />
            </div>
            <div className='text'>
                <h3>{strMeal}</h3>
            </div>
        </div>
</section>
    );
};

export default Food;
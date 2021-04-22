import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <img className={style.image} src={image} alt={"An image of: " + title} />    
            <h3 className={style.title}>{title}</h3>
            <p className={style.calories}>{calories.toFixed(2)} Calories</p>
            {/* <ol>
                {ingredients.map(ingredient => (
                    <ul>{ingredient.text}</ul>
                ))}
            </ol> */}
        </div>
    );
}

export default Recipe;

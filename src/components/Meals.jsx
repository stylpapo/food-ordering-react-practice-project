import Meal from "./Meal";
import { useState, useEffect } from "react";
import { getMeals } from "../api";

const CURRENCY = "€";

export default function Meals({ onMealSelection }) {
    const [meals, setMeals] = useState([]);

    function handleSetMeals(availableMeals) {
        setMeals(availableMeals); // not based on previous data
    }
  
    // get meals
    useEffect(() => {
        async function fetchMeals() {
            try {
                const availableMeals = await getMeals();
                handleSetMeals(availableMeals);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchMeals();
    }, []);
    
    console.log('Meals');

    return (
        <div id="meals">
            {!meals.length && <p>There are no available meals at the moment!</p>}
            {meals.map((meal) => (
                <Meal
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    price={meal.price}
                    currency={CURRENCY}
                    description={meal.description}
                    image={meal.image}
                    addToCart={onMealSelection}
                />
            ))}
      </div>
    )
}
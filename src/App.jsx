import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  const [order, setOrder] = useState({});

  // aytos o tropos den einai apodotikos
  // giati ginetai re-render olokliro to application
  // mono kai mono gia na kanw update to cart count
  // meta tha ginetai rerender to sumpan gia kahte action
  // lysi: context
  function handleSetOrder(meal) {
    setOrder((previousOrder) => {
      // destructure meal to get the id from its key
      const [[mealId, mealData]] = Object.entries(meal);
      return {
        ...previousOrder, 
        [mealId]: {
          ...mealData,
          count: previousOrder[mealId] ? previousOrder[mealId].count + 1 : 1
        }
      }
    });
  }

  function handleMealSelection(meal) {
    handleSetOrder(meal);
  }
    console.log('App');

  return (
    <>
      <Header order={order} />
      <Meals onMealSelection={handleMealSelection} />
    </>
  );
}

export default App;
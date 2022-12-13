import { Fragment } from "react";
import MealSumary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealSumary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;

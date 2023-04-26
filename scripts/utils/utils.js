import { setIngredients, setAppliances, setUstensils } from "../data/global.js";

export const dispatchFilters = (currentRecipesList) => {
  const appliances = new Set();
  const ustensils = new Set();
  const ingredients = new Set();

  currentRecipesList.forEach((element) => {
    appliances.add(element.appliance);
    element.ustensils.forEach((ustensil) => ustensils.add(ustensil.toLowerCase()));
    element.ingredients.forEach((ingredient) => ingredients.add(ingredient.ingredient.toLowerCase()));
  });

  setAppliances([...appliances]);
  setUstensils([...ustensils].map((ustensil) => ustensil.charAt(0).toUpperCase() + ustensil.slice(1)));
  setIngredients([...ingredients].map((ingredient) => ingredient.charAt(0).toUpperCase() + ingredient.slice(1)));
};

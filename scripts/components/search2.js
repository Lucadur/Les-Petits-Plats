import { getInitialRecipeList, getCurrentRecipeList, setCurrentRecipeList } from "../data/global.js";
import { dispatchFilters } from "../utils/utils.js";
import { displayCards, createFiltersList } from "../index.js";

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", () => {
  const searchQuery = searchInput.value.trim().toLowerCase();
  const initialRecipeList = getInitialRecipeList();
  const currentRecipeList = [];

  if (searchQuery.length >= 3) {
    for (let i = 0; i < initialRecipeList.length; i++) {
      const recipe = initialRecipeList[i];
      const inTitle = recipe.name.toLowerCase().includes(searchQuery);
      const inDescription = recipe.description.toLowerCase().includes(searchQuery);
      let inIngredients = false;

      for (let j = 0; j < recipe.ingredients.length; j++) {
        const ingredient = recipe.ingredients[j].ingredient.toLowerCase();
        if (ingredient.includes(searchQuery)) {
          inIngredients = true;
          break;
        }
      }

      if (inTitle || inDescription || inIngredients) {
        currentRecipeList.push(recipe);
      }
    }
    setCurrentRecipeList(currentRecipeList);
  } else {
    setCurrentRecipeList(initialRecipeList);
  }

  dispatchFilters(getCurrentRecipeList());
  displayCards(getCurrentRecipeList());
  createFiltersList();
});

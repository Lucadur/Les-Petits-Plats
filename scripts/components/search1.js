import { getInitialRecipeList, getCurrentRecipeList, setCurrentRecipeList } from "../data/global.js";
import { dispatchFilters } from "../utils/utils.js";
import { displayCards, createFiltersList } from "../index.js";

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", () => {
  const searchQuery = searchInput.value.trim().toLowerCase();

  if (searchQuery.length >= 3) {
    const filteredRecipes = getInitialRecipeList().filter((recipe) => {
      const inTitle = recipe.name.toLowerCase().includes(searchQuery);
      const inDescription = recipe.description.toLowerCase().includes(searchQuery);
      const inIngredients = recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(searchQuery));
      return inTitle || inDescription || inIngredients;
    });
    setCurrentRecipeList(filteredRecipes);
  } else {
    setCurrentRecipeList(getInitialRecipeList());
  }

  dispatchFilters(getCurrentRecipeList());
  displayCards(getCurrentRecipeList());
  createFiltersList();
});

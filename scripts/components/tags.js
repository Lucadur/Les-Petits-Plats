import { dispatchFilters } from "../utils/utils.js";
import { displayCards, createFiltersList } from "../index.js";
import { getCurrentRecipeList, selectedIngredients, selectedAppliances, selectedUstensils } from "../data/global.js";

// CREATION DES TAGS
export function createTags(keyword, tagContainer, selectedArray, updateFilters) {
  const keywordLower = keyword.toLowerCase();
  const tag = document.createElement("span");
  const closeButton = document.createElement("i");
  closeButton.classList.add("fa-regular", "fa-circle-xmark");
  tag.innerText = keyword;
  tagContainer.appendChild(tag);
  tag.appendChild(closeButton);
  selectedArray.push(keywordLower);
  updateFilters();

  tag.addEventListener("click", function () {
    tagContainer.removeChild(tag);
    const index = selectedArray.indexOf(keywordLower);
    if (index > -1) {
      selectedArray.splice(index, 1);
    }
    updateFilters();
  });
}
// RECHERCHE PAR TAGS
export function filterRecipesByTags(recipes, tags) {
  return recipes.filter((recipe) => {
    const ingredients = recipe.ingredients.map((i) => i.ingredient.toLowerCase());
    const ustensils = recipe.ustensils.map((u) => u.toLowerCase());
    const appliance = recipe.appliance.toLowerCase();

    const allTags = [...ingredients, ...ustensils, appliance];

    return tags.every((tag) => allTags.includes(tag.toLowerCase()));
  });
}

export function updateFilters() {
  const tags = [...selectedIngredients, ...selectedAppliances, ...selectedUstensils];
  const filteredRecipes = filterRecipesByTags(getCurrentRecipeList(), tags);
  displayCards(filteredRecipes);
  dispatchFilters(filteredRecipes);
  createFiltersList(filteredRecipes);
}

import {
  getInitialRecipeList,
  getCurrentRecipeList,
  getIngredients,
  getAppliances,
  getUstensils,
  selectedIngredients,
  selectedAppliances,
  selectedUstensils,
  ingredientsContainer,
  ustensilsContainer,
  appliancesContainer,
  ingredientsTagContainer,
  appliancesTagContainer,
  ustensilsTagContainer,
} from "./data/global.js";
import { dispatchFilters } from "./utils/utils.js";
import { createTags, updateFilters } from "./components/tags.js";

// AFFICHAGE DES RECETTES
export function displayCards(recipes) {
  const cardContainer = document.querySelector(".cards-container");
  cardContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const cardPicture = document.createElement("div");
    cardPicture.classList.add("card-picture");

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");

    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    const upDescription = document.createElement("div");
    upDescription.classList.add("up-description");

    const timeContainer = document.createElement("div");
    timeContainer.classList.add("time-container");

    const recipeTitle = document.createElement("h3");
    recipeTitle.textContent = recipe.name;

    const recipeTime = document.createElement("p");
    recipeTime.textContent = `${recipe.time} min`;

    const clock = document.createElement("i");
    clock.classList.add("fa-regular", "fa-clock");

    const downDescription = document.createElement("div");
    downDescription.classList.add("down-description");

    const recipeIngredients = document.createElement("ul");

    recipe.ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement("li");
      const ingredientName = document.createElement("span");
      ingredientName.classList.add("ingredient-name");
      const ingredientQuantity = document.createElement("span");

      if (ingredient.unit) {
        ingredientName.textContent = `${ingredient.ingredient}: `;
        ingredientQuantity.textContent = `${ingredient.quantity} ${ingredient.unit}`;
      } else if (ingredient.quantity) {
        ingredientName.textContent = `${ingredient.ingredient}: `;
        ingredientQuantity.textContent = `${ingredient.quantity}`;
      } else {
        ingredientName.textContent = `${ingredient.ingredient}`;
      }

      recipeIngredients.appendChild(ingredientItem);
      ingredientItem.appendChild(ingredientName);

      if (ingredientQuantity.textContent) {
        ingredientItem.appendChild(ingredientQuantity);
      }
    });

    const recipeDescription = document.createElement("p");
    recipeDescription.classList.add("recipe-description");
    recipeDescription.textContent = recipe.description;

    timeContainer.appendChild(clock);
    timeContainer.appendChild(recipeTime);
    upDescription.appendChild(recipeTitle);
    upDescription.appendChild(timeContainer);

    downDescription.appendChild(recipeIngredients);
    downDescription.appendChild(recipeDescription);

    cardDescription.appendChild(upDescription);
    cardDescription.appendChild(downDescription);

    recipeCard.appendChild(cardPicture);
    recipeCard.appendChild(cardDescription);

    cardContainer.appendChild(recipeCard);
  });
  const cardsContainer = document.querySelector(".cards-container");
  const noResultsMessage = document.querySelector(".no-results-message");

  if (getCurrentRecipeList().length === 0) {
    if (!noResultsMessage) {
      const message = `Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
      const noResultsMessage = document.createElement("p");
      noResultsMessage.classList.add("no-results-message");
      noResultsMessage.textContent = message;
      cardsContainer.appendChild(noResultsMessage);
    }
  } else {
    if (noResultsMessage) {
      cardsContainer.removeChild(noResultsMessage);
    }
  }
}

// CREATION DES LISTES
export function createFiltersList(recipes) {
  ingredientsContainer.innerHTML = "";
  appliancesContainer.innerHTML = "";
  ustensilsContainer.innerHTML = "";

  const ingredientsList = getIngredients(recipes);
  const appliancesList = getAppliances(recipes);
  const ustensilsList = getUstensils(recipes);

  ingredientsList.forEach((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    ingredientsContainer.appendChild(ingredientItem);

    ingredientItem.addEventListener("click", function () {
      createTags(ingredient, ingredientsTagContainer, selectedIngredients, updateFilters);
    });
  });

  ustensilsList.forEach((ustensil) => {
    const ustensilItem = document.createElement("li");
    ustensilItem.textContent = ustensil;
    ustensilsContainer.appendChild(ustensilItem);

    ustensilItem.addEventListener("click", function () {
      createTags(ustensil, ustensilsTagContainer, selectedUstensils, updateFilters);
    });
  });

  appliancesList.forEach((appliance) => {
    const applianceItem = document.createElement("li");
    applianceItem.textContent = appliance;
    appliancesContainer.appendChild(applianceItem);

    applianceItem.addEventListener("click", function () {
      createTags(appliance, appliancesTagContainer, selectedAppliances, updateFilters);
    });
  });
}

// INIT

function init() {
  const initialRecipes = getInitialRecipeList();
  displayCards(initialRecipes);
  dispatchFilters(initialRecipes);
  createFiltersList(initialRecipes);
}

init();

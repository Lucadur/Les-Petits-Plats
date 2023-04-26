import {
  getCurrentRecipeList,
  getIngredients,
  getAppliances,
  getUstensils,
  selectedIngredients,
  selectedAppliances,
  selectedUstensils,
  dropdownIngredients,
  dropdownAppliances,
  dropdownUstensils,
  ingredientFilterInput,
  applianceFilterInput,
  ustensilFilterInput,
  ingredientsContainer,
  ustensilsContainer,
  appliancesContainer,
  ingredientsTagContainer,
  appliancesTagContainer,
  ustensilsTagContainer,
} from "../data/global.js";

import { createTags, updateFilters } from "./tags.js";

// FILTRE DES DROPDOWNS SELON RECHERCHE

function filterIngredients() {
  const filterValue = ingredientFilterInput.value.toLowerCase();
  const filteredIngredients = getIngredients(getCurrentRecipeList()).filter((ingredient) => ingredient.toLowerCase().includes(filterValue));
  ingredientsContainer.innerHTML = "";
  filteredIngredients.forEach((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    ingredientsContainer.appendChild(ingredientItem);

    ingredientItem.addEventListener("click", function () {
      createTags(ingredient, ingredientsTagContainer, selectedIngredients, updateFilters);
    });
  });
}
function filterAppliances() {
  const filterValue = applianceFilterInput.value.toLowerCase();
  const filteredAppliances = getAppliances(getCurrentRecipeList()).filter((appliance) => appliance.toLowerCase().includes(filterValue));
  appliancesContainer.innerHTML = "";
  filteredAppliances.forEach((appliance) => {
    const applianceItem = document.createElement("li");
    applianceItem.textContent = appliance;
    appliancesContainer.appendChild(applianceItem);

    applianceItem.addEventListener("click", function () {
      createTags(appliance, appliancesTagContainer, selectedAppliances, updateFilters);
    });
  });
}
function filterUstensils() {
  const filterValue = ustensilFilterInput.value.toLowerCase();
  const filteredUstensils = getUstensils(getCurrentRecipeList()).filter((ustensil) => ustensil.toLowerCase().includes(filterValue));
  ustensilsContainer.innerHTML = "";
  filteredUstensils.forEach((ustensil) => {
    const ustensilItem = document.createElement("li");
    ustensilItem.textContent = ustensil;
    ustensilsContainer.appendChild(ustensilItem);

    ustensilItem.addEventListener("click", function () {
      createTags(ustensil, ustensilsTagContainer, selectedUstensils, updateFilters);
    });
  });
}

ingredientFilterInput.addEventListener("input", filterIngredients);
applianceFilterInput.addEventListener("input", filterAppliances);
ustensilFilterInput.addEventListener("input", filterUstensils);

// AFFICHAGE & FERMETURE DES DROPDOWNS

function toggleDropdown(container, dropdown, filterInput) {
  if (container.style.display === "grid") {
    container.style.display = "none";
    dropdown.style.height = "";
    dropdown.style.width = "";
    filterInput.value = filterInput.name;
  } else {
    container.style.display = "grid";
    dropdown.style.height = "80px";
    dropdown.style.width = "670px";
    filterInput.value = "";
  }
}

dropdownIngredients.addEventListener("click", function () {
  toggleDropdown(ingredientsContainer, dropdownIngredients, ingredientFilterInput);
});

dropdownAppliances.addEventListener("click", function () {
  toggleDropdown(appliancesContainer, dropdownAppliances, applianceFilterInput);
});

dropdownUstensils.addEventListener("click", function () {
  toggleDropdown(ustensilsContainer, dropdownUstensils, ustensilFilterInput);
});

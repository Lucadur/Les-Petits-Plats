import { recipes } from "./recipes.js";

export let selectedIngredients = [];
export let selectedAppliances = [];
export let selectedUstensils = [];

export const dropdownIngredients = document.querySelector(".dropdown-menu-ingredients");
export const dropdownAppliances = document.querySelector(".dropdown-menu-appareils");
export const dropdownUstensils = document.querySelector(".dropdown-menu-ustensiles");

export const ingredientFilterInput = document.querySelector("#sort-by-ingredients");
export const applianceFilterInput = document.querySelector("#sort-by-appliances");
export const ustensilFilterInput = document.querySelector("#sort-by-ustensils");

export const ingredientsContainer = document.querySelector(".ingredients-options");
export const ustensilsContainer = document.querySelector(".ustensils-options");
export const appliancesContainer = document.querySelector(".appliances-options");

export const ingredientsTagContainer = document.querySelector(".ingredients-tags-container");
export const appliancesTagContainer = document.querySelector(".appliances-tags-container");
export const ustensilsTagContainer = document.querySelector(".ustensils-tags-container");

let initialRecipeList = recipes;
let currentRecipeList = recipes;
let ingredients = [];
let appliances = [];
let ustensils = [];

/* GETTERS */

export function getInitialRecipeList() {
  return initialRecipeList;
}

export function getCurrentRecipeList() {
  return currentRecipeList;
}

export function getIngredients() {
  return ingredients;
}

export function getAppliances() {
  return appliances;
}

export function getUstensils() {
  return ustensils;
}

/* SETTERS */

export function setInitialRecipeList(value) {
  initialRecipeList = value;
}

export function setCurrentRecipeList(value) {
  currentRecipeList = value;
}

export function setIngredients(value) {
  ingredients = value;
}

export function setUstensils(value) {
  ustensils = value;
}

export function setAppliances(value) {
  appliances = value;
}

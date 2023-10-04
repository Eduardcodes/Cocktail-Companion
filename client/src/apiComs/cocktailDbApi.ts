import { getCocktails, returnValues } from '../helpers';
import { Drinks } from '../interfaces/Drink';

const rootUrl = 'https://thecocktaildb.com/api/json/v2/9973533';

export async function getAllIngredients() {
  try {
    const res = await fetch(`${rootUrl}/list.php?i=list`);
    const handledResponse: Drinks = await res.json();
    return returnValues(handledResponse.drinks);
  } catch (err) {
    console.log('Get all ingredients failed');
    throw err;
  }
}

export async function getAllCategories() {
  try {
    const res = await fetch(`${rootUrl}/list.php?c=list`);
    const handledResponse: Drinks = await res.json();
    return returnValues(handledResponse.drinks);
  } catch (err) {
    console.log('Get all categories failed');
  }
}

export async function getAllGlassTypes() {
  try {
    const dbArray = await fetch(`${rootUrl}/list.php?g=list`);
    const handledResponse: Drinks = await dbArray.json();
    return returnValues(handledResponse.drinks);
  } catch (err) {
    console.log('Get all glass types failed');
  }
}

export async function getRandomCocktail() {
  return getCocktails('random.php');
}

export async function getCocktailByIngredient(ingredient: string) {
  return getCocktails(`filter.php?i=${ingredient}`);
}

export async function getCocktailById(id: string) {
  return getCocktails(`lookup.php?i=${id}`);
}

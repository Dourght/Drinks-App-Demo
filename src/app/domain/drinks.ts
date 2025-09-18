export interface Drinks {
  drinks: Drink[];
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface DrinksDetailed {
  drinks: DrinkDetailed[];
}

export interface DrinkDetailed extends DrinkIngredients, DrinkMeasures {
  idDrink: string;
  strDrink: string;
  strCategory: string | null;
  strGlass: string | null;

  strInstructions: string | null;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;

  strDrinkThumb: string;
}

export type IngredientRange =
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 13 | 14 | 15;

type DrinkIngredients = {
  [K in IngredientRange as `strIngredient${K}`]?: string | null;
};

type DrinkMeasures = {
  [K in IngredientRange as `strMeasure${K}`]?: string | null;
};

export interface DrinkIngredientPair {
  ingredient: string;
  measure: string;
}

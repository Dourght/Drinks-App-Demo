import {Component, computed, input} from '@angular/core';
import {TableModule} from 'primeng/table';
import {DrinkDetailed, DrinkIngredientPair, IngredientRange} from '../../../domain/drinks';

@Component({
  selector: 'app-ingredient-table',
  imports: [
    TableModule

  ],
  templateUrl: './ingredient-table.html'
})
export class IngredientTable {
  readonly detailedDrink = input<DrinkDetailed | null>();

  readonly rows = computed<DrinkIngredientPair[]>(() => {
    const drink = this.detailedDrink();

    if (!drink) {
      return [];
    }

    const rows: DrinkIngredientPair[] = [];
    const ingredientRange = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ] satisfies IngredientRange[];

    for (const i of ingredientRange) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];

      if (ingredient || measure) {
        rows.push({ingredient: ingredient ?? '', measure: measure ?? ''});
      }
    }

    return rows;
  })
}

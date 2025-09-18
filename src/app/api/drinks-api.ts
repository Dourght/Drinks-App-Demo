import {Injectable, signal} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {Drinks, DrinksDetailed} from '../domain/drinks';

@Injectable({
  providedIn: 'root'
})
export class DrinksApi {
  currentId = signal<string | null>(null);
  readonly listOfDrinks = httpResource<Drinks>(() => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
  readonly detailsOfDrink = httpResource<DrinksDetailed>(() => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.currentId()}`);
}

import {Component, inject, input} from '@angular/core';
import {Drink} from '../../domain/drinks';
import {Button} from 'primeng/button';
import {NgOptimizedImage} from '@angular/common';
import {DrinksApi} from '../../api/drinks-api';

@Component({
  selector: 'app-drink-list-entry',
  imports: [
    Button,
    NgOptimizedImage,
  ],
  templateUrl: './drink-list-entry.html'
})
export class DrinkListEntry {
  readonly drink = input.required<Drink>();
  private readonly drinkApi = inject(DrinksApi);

  setCurrentDrink(): void {
    this.drinkApi.currentId.set(this.drink().idDrink);
  }
}

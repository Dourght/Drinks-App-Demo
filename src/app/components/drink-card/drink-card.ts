import {Component, inject, input} from '@angular/core';
import {Card} from 'primeng/card';
import {NgOptimizedImage} from '@angular/common';
import {Drink} from '../../domain/drinks';
import {Button} from 'primeng/button';
import {Fluid} from 'primeng/fluid';
import {DrinksApi} from '../../api/drinks-api';

@Component({
  selector: 'app-drink-card',
  imports: [
    Card,
    NgOptimizedImage,
    Button,
    Fluid,
  ],
  templateUrl: './drink-card.html'
})
export class DrinkCard {
  readonly drink = input.required<Drink>();
  private readonly drinkApi = inject(DrinksApi);

  setCurrentDrink(): void {
    this.drinkApi.currentId.set(this.drink().idDrink);
  }
}

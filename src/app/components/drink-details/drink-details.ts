import {Component, computed, inject, linkedSignal} from '@angular/core';
import {DrinkDetailed, DrinksDetailed} from '../../domain/drinks';
import {DrinksApi} from '../../api/drinks-api';
import {Dialog} from 'primeng/dialog';
import {ProgressSpinner} from 'primeng/progressspinner';
import {Panel} from 'primeng/panel';
import {NgOptimizedImage} from '@angular/common';
import {IngredientTable} from './ingredient-table/ingredient-table';
import {InstructionsPanel} from './instructions-panel/instructions-panel';
import {Configuration} from '../../configuration/configuration';
import {DialogDesignTokens} from '@primeuix/themes/types/dialog';

@Component({
  selector: 'app-drink-details',
  imports: [
    Dialog,
    ProgressSpinner,
    Panel,
    NgOptimizedImage,
    IngredientTable,
    InstructionsPanel
  ],
  templateUrl: './drink-details.html'
})
export class DrinkDetails {
  private readonly drinkApi = inject(DrinksApi);
  protected readonly detailsOfDrink = computed<DrinksDetailed | undefined>(() => this.drinkApi.detailsOfDrink.value());
  protected readonly drink = computed<DrinkDetailed | null>(() => this.detailsOfDrink()?.drinks[0] ?? null);
  protected readonly dialogVisible = linkedSignal<boolean>(() => !!this.drinkApi.currentId());
  private readonly config = inject(Configuration);
  protected readonly designToken = computed<DialogDesignTokens>(() => {
    return {
      colorScheme: {
        light: {
          root: {
            background: 'linear-gradient(' +
              '    to bottom,' +
              `    ${this.config.data()?.lightBackgroundColor} 0%,` +
              '    #ffffff 100%' +
              '  )'
          },
        },
        dark: {
          root: {
            background: 'linear-gradient(' +
              '    to bottom,' +
              `    ${this.config.data()?.darkBackgroundColor} 0%,` +
              '    #ffffff 100%' +
              '  )'
          },
        },
      }
    }
  });

  protected unselectDrink(): void {
    this.drinkApi.currentId.set(null);
  }
}

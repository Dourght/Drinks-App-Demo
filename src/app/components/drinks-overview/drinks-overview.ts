import {Component, computed, inject, signal} from '@angular/core';
import {DrinksApi} from '../../api/drinks-api';
import {DataView} from 'primeng/dataview';
import {Drink} from '../../domain/drinks';
import {DrinkCard} from '../drink-card/drink-card';
import {FormsModule} from '@angular/forms';
import {DrinkListEntry} from '../drink-list-entry/drink-list-entry';
import {Divider} from 'primeng/divider';
import {DrinkDetails} from '../drink-details/drink-details';
import {DataViewDesignTokens} from '@primeuix/themes/types/dataview';
import {Header} from '../header/header';
import {Configuration} from '../../configuration/configuration';

@Component({
  selector: 'app-drinks-overview',
  imports: [
    DataView,
    DrinkCard,
    FormsModule,
    DrinkListEntry,
    Divider,
    DrinkDetails,
    Header
  ],
  templateUrl: './drinks-overview.html'
})
export class DrinksOverview {
  protected readonly dataLayout = signal<'list' | 'grid'>('grid');
  private readonly drinkApi = inject(DrinksApi);
  protected readonly hasFetchedDrinks = computed<boolean>(() => this.drinkApi.listOfDrinks.hasValue());
  protected readonly listOfDrinks = computed<Drink[]>(() => {
    const drinks = this.drinkApi.listOfDrinks.value()?.drinks;
    return Array.isArray(drinks) && drinks.length > 0 ? drinks : [];
  });
  private readonly config = inject(Configuration);
  protected designToken = computed<DataViewDesignTokens>(() => {
    return {
      colorScheme: {
        light: {
          content: {
            background: 'linear-gradient(' +
              '    to bottom,' +
              `    ${this.config.data()?.lightBackgroundColor} 0%,` +
              '    #ffffff 100%' +
              '  )'
          },
          header: {background: this.config.data()?.lightBackgroundColor},
        },
        dark: {
          content: {
            background: 'linear-gradient(' +
              '    to bottom,' +
              `    ${this.config.data()?.darkBackgroundColor} 0%,` +
              '    #18181b 100%' +
              '  )'
          },
          header: {background: this.config.data()?.darkBackgroundColor},
        }
      }
    }
  });
}

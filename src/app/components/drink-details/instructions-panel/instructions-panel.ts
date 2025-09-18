import {Component, inject, input} from '@angular/core';
import {DrinkDetailed} from '../../../domain/drinks';
import {Configuration} from '../../../configuration/configuration';

@Component({
  selector: 'app-instructions-panel',
  imports: [],
  templateUrl: './instructions-panel.html'
})
export class InstructionsPanel {
  readonly detailedDrink = input<DrinkDetailed | null>();

  private readonly config = inject(Configuration);
  protected readonly instructionLanguages = this.config.data()?.instructionLanguages;
}

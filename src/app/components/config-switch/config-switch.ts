import {Component, effect, inject, signal} from '@angular/core';
import {RadioButton} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import {Configuration} from '../../configuration/configuration';

@Component({
  selector: 'app-config-switch',
  imports: [
    RadioButton,
    FormsModule
  ],
  templateUrl: './config-switch.html'
})
export class ConfigSwitch {
  protected readonly configurationFile = signal<string>('app-configuration-1.json');
  private readonly config = inject(Configuration);

  constructor() {
    effect(() => {
      this.config.loadConfig(this.configurationFile());
    });
  }

}

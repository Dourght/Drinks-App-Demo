import {Component, inject} from '@angular/core';
import {SelectButton} from 'primeng/selectbutton';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {Configuration} from '../../configuration/configuration';

@Component({
  selector: 'app-darkmode-switch',
  imports: [
    SelectButton,
    FormsModule,
    NgClass
  ],
  templateUrl: './darkmode-switch.html'
})
export class DarkmodeSwitch {
  protected readonly modeOptions = ['light', 'dark'];
  protected readonly config = inject(Configuration);
}

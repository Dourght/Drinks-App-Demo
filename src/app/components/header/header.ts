import {Component, computed, inject, model} from '@angular/core';
import {DarkmodeSwitch} from "../darkmode-switch/darkmode-switch";
import {Divider} from "primeng/divider";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {SelectButton} from "primeng/selectbutton";
import {Configuration} from '../../configuration/configuration';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    DarkmodeSwitch,
    Divider,
    NgOptimizedImage,
    SelectButton,
    FormsModule,
    NgClass
  ],
  templateUrl: './header.html'
})
export class Header {
  readonly dataLayout = model<'list' | 'grid'>('grid');
  private readonly config = inject(Configuration);
  protected readonly dataLayoutOptions = ['list', 'grid'];
  protected readonly showDarkModeSwitch = computed<boolean>(() => !!this.config.data()?.showDarkModeSwitch);
  protected readonly showGridListSwitch = computed<boolean>(() => !!this.config.data()?.showGridToggle);
  protected readonly headerLogo = computed<string>(() => this.config.data()?.headerLogo ?? '');
  protected readonly headerTitle = computed<string>(() => this.config.data()?.headerTitle ?? '');
}

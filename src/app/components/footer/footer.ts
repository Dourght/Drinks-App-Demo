import {Component, computed, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Configuration} from '../../configuration/configuration';
import {ConfigSwitch} from '../config-switch/config-switch';

@Component({
  selector: 'app-footer',
  imports: [
    NgOptimizedImage,
    ConfigSwitch
  ],
  templateUrl: './footer.html'
})
export class Footer {
  private readonly config = inject(Configuration);
  protected readonly footerLogo = computed<string>(() => this.config.data()?.footerLogo ?? '');
  protected readonly footerText = computed<string>(() => this.config.data()?.footerText ?? '');
}

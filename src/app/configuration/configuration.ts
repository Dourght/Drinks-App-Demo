import {effect, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationData} from './configuration-data';
import {firstValueFrom} from 'rxjs';
import {palette, updatePrimaryPalette} from '@primeuix/themes';
import {PaletteDesignToken} from '@primeuix/themes/types';

@Injectable({
  providedIn: 'root'
})
export class Configuration {
  readonly data = signal<ConfigurationData | null>(null);
  readonly mode = signal<'light' | 'dark'>('light');
  private readonly httpClient = inject(HttpClient);

  constructor() {
    effect(() => {
      this.toggleDarkMode();
    });
  }

  async loadConfig(file: string): Promise<void | ConfigurationData> {
    try {
      const config = await firstValueFrom(this.httpClient.get<ConfigurationData>(file));
      this.data.set(config);
      this.mode.set(config.darkModeDefault ? 'dark' : 'light');
      this.setFontFromConfig(config);
      this.setPrimaryColor(config);


      return config;
    } catch (error) {
      console.error('The configuration file could not be loaded! Please check the file name.', error);
      this.data.set(null);
    }
  }

  private toggleDarkMode(): void {
    const element = document.querySelector('html');

    if (element) {
      if (this.mode() === 'light') {
        element.classList.remove('dark');
      } else {
        element.classList.add('dark');
      }
    }
  }

  private setFontFromConfig(config: ConfigurationData): void {
    document.documentElement.style.fontFamily = config.font;
  }

  private setPrimaryColor(config: ConfigurationData): void {
    const primaryPalette = palette(config.primaryColor);

    updatePrimaryPalette(primaryPalette as PaletteDesignToken);
  }
}

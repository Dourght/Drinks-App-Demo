import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfigSwitch} from './config-switch';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('ConfigSwitch', () => {
  let component: ConfigSwitch;
  let fixture: ComponentFixture<ConfigSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigSwitch],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DarkmodeSwitch} from './darkmode-switch';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('DarkmodeSwitch', () => {
  let component: DarkmodeSwitch;
  let fixture: ComponentFixture<DarkmodeSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkmodeSwitch],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DarkmodeSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

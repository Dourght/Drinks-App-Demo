import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DrinksOverview} from './drinks-overview';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('DrinksOverview', () => {
  let component: DrinksOverview;
  let fixture: ComponentFixture<DrinksOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksOverview],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

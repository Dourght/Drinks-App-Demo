import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DrinkCard} from './drink-card';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('DrinkCard', () => {
  let component: DrinkCard;
  let fixture: ComponentFixture<DrinkCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkCard],
      providers: [
        provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DrinkCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('drink', {
      idDrink: '1',
      strDrink: 'Test',
      strDrinkThumb: 'testImg'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

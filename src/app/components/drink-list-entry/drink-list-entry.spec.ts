import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DrinkListEntry} from './drink-list-entry';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('DrinkListEntry', () => {
  let component: DrinkListEntry;
  let fixture: ComponentFixture<DrinkListEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkListEntry],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkListEntry);
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

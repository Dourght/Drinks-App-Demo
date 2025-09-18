import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IngredientTable} from './ingredient-table';
import {provideZonelessChangeDetection} from '@angular/core';
import {DrinkDetailed} from '../../../domain/drinks';

describe('IngredientTable', () => {
  let component: IngredientTable;
  let fixture: ComponentFixture<IngredientTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientTable],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return empty rows when no drink is set', () => {
    fixture.componentRef.setInput('detailedDrink', null);

    expect(component['rows']()).toEqual([]);
  });

  it('should list ingredients of drink', () => {
    const mockDrink: Partial<DrinkDetailed> = {
      strIngredient1: 'Vodka',
      strMeasure1: '50ml',
      strIngredient2: 'Orange Juice',
      strMeasure2: '100ml',
      strIngredient3: null,
      strMeasure3: null
    };
    fixture.componentRef.setInput('detailedDrink', mockDrink);

    const rows = component.rows();

    expect(rows.length).toBe(2);
    expect(rows).toContain({ingredient: 'Vodka', measure: '50ml'});
    expect(rows).toContain({ingredient: 'Orange Juice', measure: '100ml'});
  });
});

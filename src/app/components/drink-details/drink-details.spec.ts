import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DrinkDetails} from './drink-details';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('DrinkDetails', () => {
  let component: DrinkDetails;
  let fixture: ComponentFixture<DrinkDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkDetails],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

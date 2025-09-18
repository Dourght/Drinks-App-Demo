import {TestBed} from '@angular/core/testing';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';
import {provideZonelessChangeDetection} from '@angular/core';
import {DrinksApi} from './drinks-api';

describe('DrinksApi', () => {
  let service: DrinksApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(DrinksApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

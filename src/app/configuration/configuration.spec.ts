import {TestBed} from '@angular/core/testing';

import {Configuration} from './configuration';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';

describe('Configuration', () => {
  let service: Configuration;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(Configuration);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('load config and apply settings', async () => {
    const cfg = {font: 'Arial', primaryColor: '#4f46e5'} as any;
    const promiseLoadConfig = service.loadConfig('/assets/aConfigHere.json');
    const req = httpMock.expectOne('/assets/aConfigHere.json');

    expect(req.request.method).toBe('GET');

    req.flush(cfg);

    await promiseLoadConfig;
    expect(service.data()).toEqual(cfg);
    expect(document.documentElement.style.fontFamily).toBe(cfg.font);
  });

  it('handles config not found', async () => {
    const promiseLoadConfig = service.loadConfig('/noConfigHere.json');
    const req = httpMock.expectOne('/noConfigHere.json');

    req.flush('not found', {status: 404, statusText: 'Not Found'});

    await promiseLoadConfig;

    expect(service.data()).toBeNull();
  });
});

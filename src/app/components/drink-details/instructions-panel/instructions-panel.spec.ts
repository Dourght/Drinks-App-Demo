import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InstructionsPanel} from './instructions-panel';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('InstructionsPanel', () => {
  let component: InstructionsPanel;
  let fixture: ComponentFixture<InstructionsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionsPanel],
      providers: [
        provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionsPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

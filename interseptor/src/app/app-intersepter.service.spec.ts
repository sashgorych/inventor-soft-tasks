import { TestBed, inject } from '@angular/core/testing';

import { AppIntersepterService } from './app-intersepter.service';

describe('AppIntersepterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppIntersepterService]
    });
  });

  it('should be created', inject([AppIntersepterService], (service: AppIntersepterService) => {
    expect(service).toBeTruthy();
  }));
});

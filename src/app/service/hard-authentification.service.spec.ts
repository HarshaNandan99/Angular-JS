import { TestBed } from '@angular/core/testing';

import { HardAuthentificationService } from './hard-authentification.service';

describe('HardAuthentificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardAuthentificationService = TestBed.get(HardAuthentificationService);
    expect(service).toBeTruthy();
  });
});

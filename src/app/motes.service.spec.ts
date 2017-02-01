/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MotesService } from './motes.service';

describe('MotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotesService]
    });
  });

  it('should ...', inject([MotesService], (service: MotesService) => {
    expect(service).toBeTruthy();
  }));
});

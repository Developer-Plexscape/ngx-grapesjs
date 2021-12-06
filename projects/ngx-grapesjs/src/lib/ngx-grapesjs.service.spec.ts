import { TestBed } from '@angular/core/testing';

import { NgxGrapesjsService } from './ngx-grapesjs.service';

describe('NgxGrapesjsService', () => {
  let service: NgxGrapesjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGrapesjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

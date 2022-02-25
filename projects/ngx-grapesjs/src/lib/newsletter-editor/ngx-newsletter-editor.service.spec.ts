import { TestBed } from '@angular/core/testing';

import { NgxNewsletterEditorService } from './ngx-newsletter-editor.service';

describe('NgxNewsletterEditorService', () => {
  let service: NgxNewsletterEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNewsletterEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

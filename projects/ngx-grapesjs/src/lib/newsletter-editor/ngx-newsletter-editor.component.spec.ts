import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNewsletterEditorComponent } from './ngx-newsletter-editor.component';

describe('NgxNewsletterEditorComponent', () => {
  let component: NgxNewsletterEditorComponent;
  let fixture: ComponentFixture<NgxNewsletterEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxNewsletterEditorComponent]
    });
    fixture = TestBed.createComponent(NgxNewsletterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGrapesjsComponent } from './ngx-grapesjs.component';

describe('NgxGrapesjsComponent', () => {
  let component: NgxGrapesjsComponent;
  let fixture: ComponentFixture<NgxGrapesjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxGrapesjsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGrapesjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

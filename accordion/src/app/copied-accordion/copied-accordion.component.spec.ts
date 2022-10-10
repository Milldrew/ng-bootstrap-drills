import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiedAccordionComponent } from './copied-accordion.component';

describe('CopiedAccordionComponent', () => {
  let component: CopiedAccordionComponent;
  let fixture: ComponentFixture<CopiedAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopiedAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopiedAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

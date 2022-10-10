import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDrillComponent } from './accordion-drill.component';

describe('AccordionDrillComponent', () => {
  let component: AccordionDrillComponent;
  let fixture: ComponentFixture<AccordionDrillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionDrillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

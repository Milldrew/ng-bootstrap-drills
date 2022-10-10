import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiedAlertComponent } from './copied-alert.component';

describe('CopiedAlertComponent', () => {
  let component: CopiedAlertComponent;
  let fixture: ComponentFixture<CopiedAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopiedAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopiedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

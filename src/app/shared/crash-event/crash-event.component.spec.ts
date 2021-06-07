import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashEventComponent } from './crash-event.component';

describe('CrashEventComponent', () => {
  let component: CrashEventComponent;
  let fixture: ComponentFixture<CrashEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrashEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

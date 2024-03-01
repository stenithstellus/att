import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExittimeComponent } from './exittime.component';

describe('ExittimeComponent', () => {
  let component: ExittimeComponent;
  let fixture: ComponentFixture<ExittimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExittimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExittimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

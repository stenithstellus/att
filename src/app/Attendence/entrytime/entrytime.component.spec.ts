import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrytimeComponent } from './entrytime.component';

describe('EntrytimeComponent', () => {
  let component: EntrytimeComponent;
  let fixture: ComponentFixture<EntrytimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrytimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamadanComponent } from './ramadan.component';

describe('RamadanComponent', () => {
  let component: RamadanComponent;
  let fixture: ComponentFixture<RamadanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamadanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamadanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




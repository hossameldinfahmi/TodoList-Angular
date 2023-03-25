import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavroutesComponent } from './favroutes.component';

describe('FavroutesComponent', () => {
  let component: FavroutesComponent;
  let fixture: ComponentFixture<FavroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavroutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

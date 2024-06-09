import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSunglassesComponent } from './create-sunglasses.component';

describe('CreateSunglassesComponent', () => {
  let component: CreateSunglassesComponent;
  let fixture: ComponentFixture<CreateSunglassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSunglassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSunglassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

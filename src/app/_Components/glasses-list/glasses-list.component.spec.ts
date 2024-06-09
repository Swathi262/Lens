import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassesListComponent } from './glasses-list.component';

describe('GlassesListComponent', () => {
  let component: GlassesListComponent;
  let fixture: ComponentFixture<GlassesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

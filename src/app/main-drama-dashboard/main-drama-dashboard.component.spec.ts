import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDramaDashboardComponent } from './main-drama-dashboard.component';

describe('MainDramaDashboardComponent', () => {
  let component: MainDramaDashboardComponent;
  let fixture: ComponentFixture<MainDramaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDramaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDramaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

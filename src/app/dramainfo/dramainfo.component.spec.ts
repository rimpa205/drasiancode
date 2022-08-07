import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramainfoComponent } from './dramainfo.component';

describe('DramainfoComponent', () => {
  let component: DramainfoComponent;
  let fixture: ComponentFixture<DramainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DramainfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DramainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

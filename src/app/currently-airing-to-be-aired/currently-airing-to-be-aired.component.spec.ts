import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyAiringToBeAiredComponent } from './currently-airing-to-be-aired.component';

describe('CurrentlyAiringToBeAiredComponent', () => {
  let component: CurrentlyAiringToBeAiredComponent;
  let fixture: ComponentFixture<CurrentlyAiringToBeAiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlyAiringToBeAiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyAiringToBeAiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

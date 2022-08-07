import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledramalandingpageComponent } from './singledramalandingpage.component';

describe('SingledramalandingpageComponent', () => {
  let component: SingledramalandingpageComponent;
  let fixture: ComponentFixture<SingledramalandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledramalandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledramalandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

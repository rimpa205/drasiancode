import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramadataComponent } from './dramadata.component';

describe('DramadataComponent', () => {
  let component: DramadataComponent;
  let fixture: ComponentFixture<DramadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DramadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DramadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

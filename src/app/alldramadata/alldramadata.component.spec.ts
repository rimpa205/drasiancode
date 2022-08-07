import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldramadataComponent } from './alldramadata.component';

describe('AlldramadataComponent', () => {
  let component: AlldramadataComponent;
  let fixture: ComponentFixture<AlldramadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldramadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldramadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeakerComponent } from './add-seaker.component';

describe('AddSeakerComponent', () => {
  let component: AddSeakerComponent;
  let fixture: ComponentFixture<AddSeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

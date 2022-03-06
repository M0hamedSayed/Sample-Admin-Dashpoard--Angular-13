import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaekersComponent } from './spaekers.component';

describe('SpaekersComponent', () => {
  let component: SpaekersComponent;
  let fixture: ComponentFixture<SpaekersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaekersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

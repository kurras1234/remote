import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDataComponent } from './students-data.component';

describe('StudentsDataComponent', () => {
  let component: StudentsDataComponent;
  let fixture: ComponentFixture<StudentsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

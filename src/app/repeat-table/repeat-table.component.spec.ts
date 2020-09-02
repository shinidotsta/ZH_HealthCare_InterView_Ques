import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatTableComponent } from './repeat-table.component';

describe('RepeatTableComponent', () => {
  let component: RepeatTableComponent;
  let fixture: ComponentFixture<RepeatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

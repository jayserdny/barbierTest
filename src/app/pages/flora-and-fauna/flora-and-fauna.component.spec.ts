import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloraAndFaunaComponent } from './flora-and-fauna.component';

describe('FloraAndFaunaComponent', () => {
  let component: FloraAndFaunaComponent;
  let fixture: ComponentFixture<FloraAndFaunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloraAndFaunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloraAndFaunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

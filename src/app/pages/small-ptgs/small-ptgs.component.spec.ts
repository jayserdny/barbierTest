import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPTGSComponent } from './small-ptgs.component';

describe('SmallPTGSComponent', () => {
  let component: SmallPTGSComponent;
  let fixture: ComponentFixture<SmallPTGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallPTGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallPTGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

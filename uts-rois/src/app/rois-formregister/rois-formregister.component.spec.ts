import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoisFormregisterComponent } from './rois-formregister.component';

describe('RoisFormregisterComponent', () => {
  let component: RoisFormregisterComponent;
  let fixture: ComponentFixture<RoisFormregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoisFormregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoisFormregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

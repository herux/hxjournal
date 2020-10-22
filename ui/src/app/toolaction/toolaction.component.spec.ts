import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolactionComponent } from './toolaction.component';

describe('ToolactionComponent', () => {
  let component: ToolactionComponent;
  let fixture: ComponentFixture<ToolactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

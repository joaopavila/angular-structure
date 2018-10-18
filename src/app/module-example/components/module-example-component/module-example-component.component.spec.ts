import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleExampleComponentComponent } from './module-example-component.component';

describe('ModuleExampleComponentComponent', () => {
  let component: ModuleExampleComponentComponent;
  let fixture: ComponentFixture<ModuleExampleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleExampleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

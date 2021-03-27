import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgxsComponent } from './test-ngxs.component';

describe('TestNgxsComponent', () => {
  let component: TestNgxsComponent;
  let fixture: ComponentFixture<TestNgxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNgxsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

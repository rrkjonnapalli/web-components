import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcFormComponent } from './wc-form.component';

describe('WcFormComponent', () => {
  let component: WcFormComponent;
  let fixture: ComponentFixture<WcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

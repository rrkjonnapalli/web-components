import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcTableComponent } from './wc-table.component';

describe('WcTableComponent', () => {
  let component: WcTableComponent;
  let fixture: ComponentFixture<WcTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

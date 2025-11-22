import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoadingComponent } from './ngx-loading';

describe('NgxLoading', () => {
  let component: NgxLoadingComponent;
  let fixture: ComponentFixture<NgxLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEnComponent } from './about-en.component';

describe('AboutEnComponent', () => {
  let component: AboutEnComponent;
  let fixture: ComponentFixture<AboutEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

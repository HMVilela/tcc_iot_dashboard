/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MotesComponent } from './motes.component';

describe('MotesComponent', () => {
  let component: MotesComponent;
  let fixture: ComponentFixture<MotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WelcomeComponent } from '../../welcome/welcome.component';
import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from '../../material.module';
import { ResultComponent } from '../result.component';

import { ResultsComponent } from './results.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent, ResultComponent, WelcomeComponent ],

      imports: [MaterialModule, 
                AppRoutingModule, 
                RouterTestingModule,
                ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

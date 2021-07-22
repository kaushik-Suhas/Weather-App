import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ResultComponent } from './result.component';
import { ResultsComponent } from './results/results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponent,
                      WelcomeComponent,
                      ResultsComponent ],
                      
      imports: [MaterialModule,
                RouterModule.forRoot([]),
                AppRoutingModule,
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientModule,
                BrowserAnimationsModule],
      providers:[{provide: APP_BASE_HREF, useValue: '/'}]
    })

    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

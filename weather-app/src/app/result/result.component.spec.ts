import { APP_BASE_HREF } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ResultComponent } from './result.component';
import { ResultsComponent } from './results/results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';


describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ ResultComponent,
                      WelcomeComponent,
                      ResultsComponent ],
                      
      imports: [MaterialModule,
                RouterModule.forRoot([]),
                AppRoutingModule,
                ReactiveFormsModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                HttpClientTestingModule],

      providers:[{provide: APP_BASE_HREF, useValue: '/'}, 
      { provide: ActivatedRoute, useValue: { firstChild: { 'params': from([{ 'days': 5, 'key': 204111, 'name': 'Mysore'}]) }} }]
    })
    httpMock = TestBed.inject(HttpTestingController);
  });
      

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should return number and city', () => {
//   // const expectedResult = {
//   //   Forecasts: []
//   // }
//   //   const req = httpMock.expectOne(
//   //     req => req.method === 'GET' && req.urlWithParams ===
//   //      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/204111?apikey=${environment.apiKey}`).flush(null, { status: 200, statusText:'Ok' });;
// });
});

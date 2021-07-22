import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from './material.module'
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultComponent } from './result/result.component';
import { ResultsComponent } from './result/results/results.component';
import { DialogOverview } from './welcome/dialog-overview/dialog-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SideHeaderComponent,
        WelcomeComponent,
        ResultComponent,
        ResultsComponent,
        DialogOverview
      ],
      imports: [
        MatListModule,
        MaterialModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('weather-app');
  });
});

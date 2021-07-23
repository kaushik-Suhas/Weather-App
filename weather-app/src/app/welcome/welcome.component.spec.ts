import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      imports: [MaterialModule,
                ReactiveFormsModule,
                BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check for a valid name', () => {
    let name=component.nameValidations.controls['name'];
    expect(name.valid).toBeFalsy();

    name.setValue('ABC')
    expect(name.valid).toBeTruthy();

    name.setValue('6546')
    expect(name.valid).toBeFalsy();

    name.setValue('12d@df')
    expect(name.valid).toBeFalsy();
  });
});

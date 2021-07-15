import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, NumberValueAccessor, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DialogData } from "./dialog-overview.model";
import { ActivatedRoute, Router } from "@angular/router";

interface Day {
  value: number;
  viewValue: string;
}

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog-overview.component.html',
})

export class DialogOverview {
 location: string;
 autocompleteLocation = []; 
 locationValidations: FormGroup;
 locationSelected = '';
 daysSelected: Number;

 days: Day[] = [
   { value: 1, viewValue: '1 Day'},
   { value: 5, viewValue: '5 Days'},
   { value: 10, viewValue: '10 Days'},
   { value: 15, viewValue: '15 Days'}
 ];


constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private http: HttpClient, 
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.locationValidations = this.formBuilder.group({
      location: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      days: ['', Validators.required]
    });
  }
  
  onInputChange(event: Event) {
    this.location = (<HTMLInputElement>event.target).value;
    console.log(this.location)
    if (this.location.length > 3) {
      console.log('in here')
       this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=GO7YhgH0FFaTEa0HsAieNGdofPFn5sfA&q=${this.location}`)
          .subscribe(response => {
            console.log(response)
            for(let i= 0; i<Object.keys(response).length; i++){
              const obj = {
                name: response[i].LocalizedName,
                key: response[i].Key
              }
              this.autocompleteLocation.push(obj);
            }
            if(Object.keys(response).length === 0 && this.autocompleteLocation[0] !== 'No Match') {
              this.autocompleteLocation.push("No Match")
              return 
              
            }
          },error => {
            console.log(error)
          })
    }
  }
    openResult() {
      const location = this.autocompleteLocation.find(x => x.name === this.locationSelected);
      this.router.navigate(['/results', location.key, this.daysSelected, location.name ])
    }
}    


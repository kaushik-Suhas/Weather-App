import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DialogData } from "./dialog-overview.model";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../../environments/environment";


interface Day {
  value: number;
  viewValue: string;
}

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog-overview.component.html',
    styleUrls: ['./dialog-overview.component.scss']
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

  ngOnInit(): void {
    this.locationValidations = this.formBuilder.group({
      location: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      days: ['', Validators.required]
    });
  }
  
  onInputChange(event: Event): void {
    this.location = (<HTMLInputElement>event.target).value;
    if (this.location.length > 3) {
       this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${environment.apiKey}&q=${this.location}`)
          .subscribe(response => {
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
    openResult(): void {
      const location = this.autocompleteLocation.find(x => x.name === this.locationSelected);
      this.router.navigate(['/results', location.key, this.daysSelected, location.name ])
    }
}    


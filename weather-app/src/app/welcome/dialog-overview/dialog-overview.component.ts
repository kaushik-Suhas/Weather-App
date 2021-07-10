import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DialogData } from "./dialog-overview.model";


@Component({
    selector: 'app-dialog',
    templateUrl: './dialog-overview.component.html',
})

export class DialogOverview {
 location: string;
 autocompleteLocation: string[] = []; 

constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private http: HttpClient) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onInputChange(event: Event) {
    this.location = (<HTMLInputElement>event.target).value;
    console.log(this.location)
    if (this.location.length > 3) {
      console.log('in here')
       this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=I3za6sPhS7BZsp2s70GViaFav7xZhq0k&q=${this.location}`)
          .subscribe(response => {
            for(let i= 0; i<Object.keys(response).length; i++){
              this.autocompleteLocation.push(response[i].LocalizedName);
            }
          })
    }
    }
  }


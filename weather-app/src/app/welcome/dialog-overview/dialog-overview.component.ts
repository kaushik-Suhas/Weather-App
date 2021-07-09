import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DialogData } from "./dialog-overview.model";


@Component({
    selector: 'app-dialog',
    templateUrl: './dialog-overview.component.html',
})

export class DialogOverview {

constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
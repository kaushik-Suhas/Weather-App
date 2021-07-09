import { Component, Inject } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { DialogOverview } from './dialog-overview/dialog-overview.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  location: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log('i am clicked')
    const dialogRef = this.dialog.open(DialogOverview, {
      width: '800px',
      height: '700px',
      data: {name: this.name, animal: this.location}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.location = result;
    });
  }

  

  
}


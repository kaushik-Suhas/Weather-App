import { Component, Inject } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { DialogOverview } from './dialog-overview/dialog-overview.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent  {

  name: string;
  location: string;
  nameValidations: FormGroup;

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.nameValidations = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]]
    });
     console.log(this.nameValidations)
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(DialogOverview, {
      width: '500px',
      height: '500px',
      data: {name: this.nameValidations.get('name').value}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.location = result;
    });
  }

  }




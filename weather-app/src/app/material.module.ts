import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [MatFormFieldModule, 
              MatInputModule, 
              MatSidenavModule, 
              MatDialogModule, 
              MatButtonModule, 
              MatIconModule],
              
    exports: [MatFormFieldModule, 
              MatInputModule, 
              MatSidenavModule, 
              MatDialogModule, 
              MatButtonModule, 
              MatIconModule]
})
export class MaterialModule {

}
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    imports: [MatFormFieldModule, 
              MatInputModule, 
              MatSidenavModule, 
              MatDialogModule, 
              MatButtonModule, 
              MatIconModule,
              MatSelectModule,
              MatAutocompleteModule,
              MatMenuModule,
              MatListModule,
              MatTableModule,
              MatPaginatorModule],
              
    exports: [MatFormFieldModule, 
              MatInputModule, 
              MatSidenavModule, 
              MatDialogModule, 
              MatButtonModule, 
              MatIconModule,
              MatSelectModule,
              MatAutocompleteModule,
              MatMenuModule,
              MatListModule,
              MatTableModule,
              MatPaginatorModule]
})
export class MaterialModule {

}
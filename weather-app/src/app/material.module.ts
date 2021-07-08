import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@NgModule({
    imports: [MatFormFieldModule, MatInputModule, MatSidenavModule, MatDialog, MatDialogRef],
    exports: [MatFormFieldModule, MatInputModule, MatSidenavModule, MatDialog, MatDialogRef]
})
export class MaterialModule {}
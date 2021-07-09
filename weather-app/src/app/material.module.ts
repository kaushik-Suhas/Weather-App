import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [MatFormFieldModule, MatInputModule, MatSidenavModule, MatDialogModule, MatButtonModule],
    exports: [MatFormFieldModule, MatInputModule, MatSidenavModule, MatDialogModule, MatButtonModule]
})
export class MaterialModule {

}
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav'


@NgModule({
    imports: [MatFormFieldModule, MatInputModule, MatSidenavModule],
    exports: [MatFormFieldModule, MatInputModule, MatSidenavModule]
})
export class MaterialModule {}
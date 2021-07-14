import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultComponent } from "./result/result.component";
import { DialogOverview } from "./welcome/dialog-overview/dialog-overview.component";

import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent},
    { path: 'results/:key/:days', component: ResultComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
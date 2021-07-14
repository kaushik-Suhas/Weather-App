import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultComponent } from "./result/result.component";
import { ResultsComponent } from "./result/results/results.component";
import { DialogOverview } from "./welcome/dialog-overview/dialog-overview.component";

import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'results', component: ResultsComponent, children: [
        { path: ':key/:days/:name', component: ResultComponent }
      ] }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
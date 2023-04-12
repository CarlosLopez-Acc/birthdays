import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { BirthdaysComponent } from "./birthdays/birthdays.component";
import { NewJoinersComponent } from "./new-joiners/new-joiners.component";

const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children: [
            { path: 'birthdays', component: BirthdaysComponent},
            { path: 'newjoiners', component: NewJoinersComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
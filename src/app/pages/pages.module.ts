import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from '../app-routing.module';

import { BirthdaysComponent } from './birthdays/birthdays.component';
import { NewJoinersComponent } from "./new-joiners/new-joiners.component";

@NgModule({
    declarations: [
        BirthdaysComponent,
        NewJoinersComponent
    ],
    exports: [
        BirthdaysComponent,
        NewJoinersComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})

export class PagesModule {}
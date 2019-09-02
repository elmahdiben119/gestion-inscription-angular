
import { NgModule } from '@angular/core';
import { ParentdashboardComponent } from './DashboardParent/ParentDashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserRouting } from './user.routing';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildsComponent } from './Childs/Childs.component';
import { AccountComponent } from './Account/account.component';

@NgModule({



    declarations: [
        AccountComponent,
        ChildsComponent,
        UserComponent,
        ParentdashboardComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        UserRouting
    ],
    providers: []
})
export class UserModule { }
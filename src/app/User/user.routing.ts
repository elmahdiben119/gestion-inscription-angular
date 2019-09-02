import { RouterModule, Routes } from '@angular/router';
import { ParentdashboardComponent } from './DashboardParent/ParentDashboard.component';
import { PagenotfoundComponent } from '../Errors/PageNotFound.component';
import { UserComponent } from './user.component';
import { ChildsComponent } from './Childs/Childs.component';
import { AccountComponent } from './Account/account.component';

const routes: Routes = [
    {
        path: 'Parent',
        component: UserComponent,
        children: [
            { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
            { path: 'Dashboard', component: ParentdashboardComponent },
            { path: 'Childs', component: ChildsComponent },
            { path: 'myaccount', component: AccountComponent },
            { path: '**', component: PagenotfoundComponent }
        ]
    }
];


export const UserRouting = RouterModule.forRoot(routes);

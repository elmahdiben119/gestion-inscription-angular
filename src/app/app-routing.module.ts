import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './Errors/PageNotFound.component';
import { LoginComponent } from './Login/Login.component';
import { UserComponent } from './User/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent},
  { path: 'Parent', component: UserComponent},
  { path: '**', component: PagenotfoundComponent }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
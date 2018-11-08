import {Routes, RouterModule} from '@angular/router';
import {MainViewComponent} from '../app/main-view/main-view.component';
import {NgModule} from '@angular/core';
import {UsersComponent} from '../app/users/users.component';
const routes: Routes = [
  {path: '', redirectTo: 'main',  pathMatch: 'full'},
  {path: 'field', component: UsersComponent},
  {path: 'main', component: MainViewComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainViewComponent, UsersComponent];

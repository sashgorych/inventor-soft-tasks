import {Routes, RouterModule} from '@angular/router';
import {ItemOptionComponent} from '../app/item-option/item-option.component';
import {NgModule} from '@angular/core';
import {OneUserComponent} from '../app/one-user/one-user.component';
const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: ItemOptionComponent},
  {path: 'users/:id', component: OneUserComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ItemOptionComponent, OneUserComponent];

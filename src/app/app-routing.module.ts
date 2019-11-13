import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/containers/home/home.component';
import { EditUserComponent } from './core/containers/edit-user/edit-user.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'edit', component: EditUserComponent},
  {path: 'create', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/containers/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'edit-form', loadChildren: () => import('./core/containers/edit-form/edit-form.module').then((m) => m.EditFormModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

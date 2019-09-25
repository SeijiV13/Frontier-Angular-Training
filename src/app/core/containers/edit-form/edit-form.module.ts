import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form.component';
import { Routes, RouterModule } from '@angular/router';
import { CardContainerModule } from 'src/app/shared/components/card-container/card-container.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserFormComponent } from '../../components/user-form/user-form.component';
const routes: Routes = [
  {path: '', component: EditFormComponent}
];

@NgModule({
  declarations: [EditFormComponent, UserFormComponent],
  imports: [
    CommonModule,
    CardContainerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EditFormModule { }

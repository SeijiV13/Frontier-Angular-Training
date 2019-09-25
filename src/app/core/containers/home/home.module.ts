import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { CardContainerComponent } from 'src/app/shared/components/card-container/card-container.component';
import { CardContainerModule } from 'src/app/shared/components/card-container/card-container.module';



@NgModule({
  declarations: [HomeComponent,
    UserListComponent],
  imports: [
    CommonModule,
    CardContainerModule,
  ],
})
export class HomeModule { }

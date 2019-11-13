import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './core/containers/home/home.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditUserComponent } from './core/containers/edit-user/edit-user.component';

import { NgxsModule } from '@ngxs/store';
import { UserState } from './core/states/user.state';
@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    NgxsModule.forRoot([
      UserState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

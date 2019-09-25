import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/containers/home/home.component';
import { UserListComponent } from './core/components/user-list/user-list.component';
import { CardContainerComponent } from './shared/components/card-container/card-container.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './core/containers/home/home.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

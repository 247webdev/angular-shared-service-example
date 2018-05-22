import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SecondUsersListComponent } from './second-users-list/second-users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    SecondUsersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

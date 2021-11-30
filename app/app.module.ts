import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditcontactComponent } from './editcontact/editcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewcontactComponent,
    EditcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

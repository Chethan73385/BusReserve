import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { HomeComponent } from './home/home.component';
import { NewcontactComponent } from './newcontact/newcontact.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'newcontact', component:NewcontactComponent},
  {path:'home/editContact/:phone', component:EditcontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

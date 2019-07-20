import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { JobdescriptionComponent } from './Home/jobdescription/jobdescription.component';


const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},

  {path:'home/:id',component:JobdescriptionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

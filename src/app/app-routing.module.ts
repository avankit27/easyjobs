import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { JobdescriptionComponent } from './Home/jobdescription/jobdescription.component';
import { EmpUpdateComponent } from './Employer/emp-update/emp-update.component';
import { RegisterComponent } from './Employer/register/register.component';
import { JobpostingComponent } from './JobPosting/jobposting/jobposting.component';
import { EmpComponent } from './Employer/emp/emp.component';
import { JobupdateComponent } from './JobPosting/jobupdate/jobupdate.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home/:id', component: JobdescriptionComponent },
  /*   { path: 'employer', component: EmpComponent },
      {path:'employer/registration',component:RegisterComponent},    // Employer Register Component
      {path:'employer/profile/:id',component:EmpUpdateComponent},  // Employer Update Component
      {path:'employer/jobposting',component:JobpostingComponent},
      {path:'employer/jobupdate/:id',component:JobupdateComponent}, */

  {
    path: 'employer',
    component: EmpComponent,
    children: [
      { path: '', redirectTo: 'jobposting', pathMatch: 'full' },
      { path: 'registration', component: RegisterComponent },
      { path: 'jobposting/:id', component: JobpostingComponent },
      { path: 'profile/:id', component: EmpUpdateComponent },
      { path: 'jobupdate/:id', component: JobupdateComponent },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

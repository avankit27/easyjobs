import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Employer/register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { FooterComponent } from './Home/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmpUpdateComponent } from './Employer/emp-update/emp-update.component';
import { JobpostingComponent } from './JobPosting/jobposting/jobposting.component';
import { JobupdateComponent } from './JobPosting/jobupdate/jobupdate.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { SearchComponent } from './Home/search/search.component';
import { JobpanelComponent } from './Home/jobpanel/jobpanel.component';
import { JobdescriptionComponent } from './Home/jobdescription/jobdescription.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    EmpUpdateComponent,
    JobpostingComponent,
    JobupdateComponent,
    NavbarComponent,
    SearchComponent,
    JobpanelComponent,
    JobdescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

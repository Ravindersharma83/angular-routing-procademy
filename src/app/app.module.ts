import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { ErrorComponent } from './error/error.component';
import { DetailComponent } from './detail/detail.component';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';

const appRoute: Routes = [
  // {path:'/', component: HomeComponent},
  {path:'', redirectTo : 'Home' , pathMatch:'full'},
  {path:'Home', component: HomeComponent},
  {path:'About', component: AboutComponent},
  {path:'Contact', component: ContactComponent},
  // {path:'Course', component: CourseComponent, canActivate : [CourseGuardService]},
  {path:'Course', component: CourseComponent},
  // {path:'Course/detail/:id', component: CourseComponent},
  
  // child routes
  {path:'Course', canActivateChild : [CourseGuardService], children:[
    {path:'detail/:id',component: DetailComponent, canActivate : [CourseGuardService]}
  ]},
  {path:'**', component: ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CourseComponent,
    ErrorComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [CourseGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

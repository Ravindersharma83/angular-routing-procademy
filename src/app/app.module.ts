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

const appRoute: Routes = [
  // {path:'/', component: HomeComponent},
  {path:'', redirectTo : 'Home' , pathMatch:'full'},
  {path:'Home', component: HomeComponent},
  {path:'About', component: AboutComponent},
  {path:'Contact', component: ContactComponent},
  {path:'Course', component: CourseComponent},
  {path:'**', component: ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CourseComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import {SignInComponent} from './sign-in/sign-in.component';

//material
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatListModule} from '@angular/material/list'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree'; 

import { CoursesComponent } from './courses/courses.component';
import { SpecialCoursesComponent } from './special-courses/special-courses.component';
import { FilterPipe } from './filter.pipe';
import { WordPipe } from './word.pipe';
import { CourseDetailComponent } from './course-detail/course-detail.component';


const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'special-courses', component: SpecialCoursesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignInComponent,
    HeaderComponent,
    CoursesComponent,
    SpecialCoursesComponent,
    FilterPipe,
    WordPipe,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
    MatToolbarModule,
    MatTreeModule,

    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

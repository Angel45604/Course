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
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatListModule} from '@angular/material/list'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';  
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree'; 

import { CoursesComponent } from './courses/courses.component';
import { SpecialCoursesComponent } from './special-courses/special-courses.component';
import { FilterPipe } from './filter.pipe';
import { WordPipe } from './word.pipe';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { MyPipePipe } from './my-pipe.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';
import { CalendarComponent } from './calendar/calendar.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { SignInSpecialComponent } from './sign-in-special/sign-in-special.component';



const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-in-special', component: SignInSpecialComponent},
  {path: 'special-courses', component: SpecialCoursesComponent},
  {path: 'calendar', component:CalendarComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignInComponent,
    SignInSpecialComponent,
    HeaderComponent,
    CoursesComponent,
    SpecialCoursesComponent,
    FilterPipe,
    WordPipe,
    CourseDetailComponent,
    MyPipePipe,
    CalendarComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatToolbarModule,
    MatTreeModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

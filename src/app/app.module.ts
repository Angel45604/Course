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
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatListModule} from '@angular/material/list'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';   
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table'; 
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
import { RegisteredUsersComponent } from './registered-users/registered-users.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { SignInSpecialComponent } from './sign-in-special/sign-in-special.component';

import { JwtModule } from '@auth0/angular-jwt';
import { PickScheduleComponent } from './pick-schedule/pick-schedule.component'
import { UserService } from './user.service';
import { OverviewDialogComponent } from './overview-dialog/overview-dialog.component';
import { SchedulesComponent } from './schedules/schedules.component';


const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-in-special', component: SignInSpecialComponent},
  {path: 'special-courses', component: SpecialCoursesComponent},
  {path: 'registered-users', component: RegisteredUsersComponent},
  {path: 'pick-schedule', component: PickScheduleComponent},
  {path: 'schedules', component: SchedulesComponent}
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
    RegisteredUsersComponent,
    TimeAgoPipe,
    PickScheduleComponent,
    OverviewDialogComponent,
    SchedulesComponent
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
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatTreeModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),

    JwtModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

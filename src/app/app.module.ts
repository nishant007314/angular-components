import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CapitalizeTitle } from './capitalize-title.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { GithubComponent } from './github/github.component';
import { GithubService } from './github/github.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    CapitalizeTitle,
    FavouriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CreateCourseComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    GithubService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

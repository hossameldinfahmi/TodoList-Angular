import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { CompletedComponent } from './completed/completed.component';
// import { faIconName } from '@fortawesome/free-solid-svg-icons';
import { TypesModule, Task, User } from './types.module';
import { DeletedTasksComponent } from './deleted-tasks/deleted-tasks.component';
import { FavroutesComponent } from './favroutes/favroutes.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodosComponent,
    TodoComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    RegistrationComponent,
    AboutComponent,
    CompletedComponent,
    DeletedTasksComponent,
    FavroutesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TypesModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

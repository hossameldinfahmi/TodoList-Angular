  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompletedComponent } from './completed/completed.component';
import { DeletedTasksComponent } from './deleted-tasks/deleted-tasks.component';
import { FavroutesComponent } from './favroutes/favroutes.component';
  import { GardService } from './gard.service';
  import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
  import { TodosComponent } from './todos/todos.component';

  const routes: Routes = [
    {path:'', component:RegistrationComponent },
    {path:'login', component:LoginComponent },
    {path:'todos', component: TodosComponent,canActivate:[GardService]},
    {path:'signup', component: RegistrationComponent},
    {path:'completed', component: CompletedComponent},
    {path:'deleted', component: DeletedTasksComponent},
    {path:'fav', component: FavroutesComponent},
    {path:'about', component: AboutComponent},
    {path: '**', component:NotFoundComponent},
    {path:'404',component:NotFoundComponent}
  ];
  // , canActivate: [GardService]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { 
    constructor(){
      console.log('Hello');
      
    }
  }

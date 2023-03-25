import { Component } from '@angular/core';
import {GardService} from '../gard.service'
import {TodosService} from '../todos.service'
import { TypesModule, Task, User } from '.././types.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   newUser:string= '';
   favQuote : string = '';
  constructor(private GardService:GardService, private TodosService : TodosService){}
  generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  userLogin(){
    let user : User  = {id:this.generateUniqueId(),username:this.newUser, fav:this.favQuote};
    this.TodosService.userLogin(user);
  }




}

function generateUniqueId() {
  throw new Error('Function not implemented.');
}

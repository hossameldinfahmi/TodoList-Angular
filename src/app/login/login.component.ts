import { Component } from '@angular/core';
import {GardService} from '../gard.service'
import {TodosService} from '../todos.service'
import { TypesModule, Task, User } from '.././types.module';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

FormControl
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
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.minLength(3), Validators.maxLength(15), Validators.required]),
    favQuote: new FormControl(null, [Validators.maxLength(50)])
  })
  userLogin(loginForm:FormGroup){
    this.favQuote = loginForm.get('favQuote')?.value;
    let user : User  = {id:this.generateUniqueId(),username:this.newUser, favQuote: this.favQuote};
    console.log(`This User After Login ${user.favQuote}`);
    this.TodosService.userLogin(user)
    
  }

}

function generateUniqueId() {
  throw new Error('Function not implemented.');
}

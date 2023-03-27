import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  emailDefaultValue = "user@gmail.com"
  user = {
    password: ''
  };
  constructor(private router: Router) { }

  registerUser(username: string, email: string, password: string): void {
    // TODO: Implement registration logic here
    
    this.router.navigate(['/login']);

    console.log(`Registering user: ${username}, ${email}, ${password}`);
  }
}

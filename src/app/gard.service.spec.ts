import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GardService {
  isLogged = false;
  users: User[] = [];

  constructor(private router: Router) {}

  userLogin(user: User): void {
    if (user.username.trim().length !== 0) {
      this.users.push(user);
      console.log('User added:', user);
      this.isLogged = true;
    } else {
      alert('You have to login first!');
      this.isLogged = false;
    }
    console.log(this.isLogged);
  }
  onSubmit() {
    this.router.navigate(['/todos']);
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('ActivateGuard is activated');
    console.log('Is logged in:', this.isLogged);
    return this.isLogged ? true : this.router.navigate(['/']);
  }
}

interface User {
  id: string;
  username: string;
  fav: string;
}

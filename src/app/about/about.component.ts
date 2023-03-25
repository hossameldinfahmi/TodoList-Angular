import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  users: any[] = [];

  // constructor(private http: HttpClient) { 
  //   this.http.get<any[]>('https://dummyjson.com/users').subscribe(data => {
  //     console.log(data);
  //     this.users = data;
  //   });
  // }
}

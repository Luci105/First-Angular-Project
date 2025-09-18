import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-routing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './http-routing.component.html',
  styleUrl: './http-routing.component.css'
})
export class HttpRoutingComponent {
  users: any[] = [];
  loading = false;

  constructor(private http: HttpClient) { }

  fetchUsers() {
    this.loading = true;
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
        this.loading = false;
      });
  }
}

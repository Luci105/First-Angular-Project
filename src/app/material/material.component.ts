import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  users: any[] = [];
  loading = false;
  currentView: 'table' | 'card' = 'table'; // default
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'company'];

  constructor(private http: HttpClient) { }

  fetchUsers() {
    this.loading = true;
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching users', err);
          this.loading = false;
        }
      });
  }

  toggleView(mode: 'table' | 'card') {
    this.currentView = mode;
  }
}
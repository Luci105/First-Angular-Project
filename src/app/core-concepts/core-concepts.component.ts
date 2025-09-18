import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-core-concepts',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './core-concepts.component.html',
  styleUrl: './core-concepts.component.css'
})
export class CoreConceptsComponent {
  isLoggedIn = true;
  users = ['Alice', 'Bob', 'Charlie'];

  show = true;
  fruits = ['Apple', 'Banana', 'Cherry'];
  price = 25;
  today = new Date();

  isActive = true;
  longText = 'Angular makes frontends powerful!';
  constructor(public globalService: GlobalServiceService) {

  }
}

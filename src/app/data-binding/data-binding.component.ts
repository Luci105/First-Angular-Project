import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  imageUrl = 'https://picsum.photos/200';
  isDisabled = true;
  title = 'Angular App';
  user = {
    name: 'John',
    age: 25
  };
  name: any;
  // Interpolation, property & event binding, Two way binding

  counter = 0;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}

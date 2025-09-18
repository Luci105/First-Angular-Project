import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  submit(formValue: any) {
    console.log(formValue.value);
  }

  form = this.fb.group({
    name: ['', Validators.required],
    dob: [new Date(), Validators.required]
  });

  constructor(private fb: FormBuilder) { }
  submit2() {
    console.log(this.form.value);
  }
}

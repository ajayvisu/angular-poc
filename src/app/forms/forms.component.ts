import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userForm: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
    ]),
    password: new FormControl(1234),
  });

  showFormDetails() {
    console.log(this.userForm);
    console.log('valid:', this.userForm.errors);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';

import { EmailValidator } from '../shared/validators/email-validator';

@Component({
  selector: 'app-email-me',
  templateUrl: './email-me.component.html',
  styleUrls: ['./email-me.component.scss']
})
export class EmailMeComponent implements OnInit {
  public form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
    });
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    console.log(email);
    // this.userService.keepInTouch(email);
  }

}

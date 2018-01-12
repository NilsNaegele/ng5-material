import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Contact } from '../shared/models/contact';
import { AlertService } from './../shared/services/alert.service';
import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private alertService: AlertService, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const organization = form.value.organization;
    const firstName = form.value.firstname;
    const lastName = form.value.lastname;
    const address = form.value.address;
    const city = form.value.city;
    const postal = form.value.postal;
    const message = form.value.message;
    const contact = new Contact(organization, firstName, lastName,
                                address, city, postal, message);
    this.userService.contactFormSend(organization, firstName, lastName, address,
                                      city, postal, message);
  }

}

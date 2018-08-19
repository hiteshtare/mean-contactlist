import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/models/contact';
import { ContactsService } from '../shared/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name: string;
  last_name: string;
  phone_no: string;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactsService.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }

  deleteContact(id) {
    this.contactsService.deleteContact(id).subscribe((data: Response) => {

      if (data['n'] === 1) {
        console.log(`Contact delete successfully`);
        this.loadContacts();
      }
    });
  }

  addContact() {
    const newContact: Contact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone_no: this.phone_no
    };

    this.contactsService.addContact(newContact).subscribe((data: Response) => {
      console.log(data['msg']);
      this.clearInputFields();
      this.loadContacts();
    });
  }

  clearInputFields() {
    this.first_name = '';
    this.last_name = '';
    this.phone_no = '';
  }
}

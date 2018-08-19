import { Contact } from './../models/contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public url = `http://localhost:3000/api/`;

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.url}/contacts`).pipe(map((data: Response) => {
      return data;
    }));
  }

  addContact(newContact: Contact): Observable<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/contact`, newContact, {}).pipe(map((data: Response) => {
      return data;
    }));
  }

  deleteContact(id: string): Observable<Response> {
    return this.http.delete(`${this.url}/contact/${id}`).pipe(map((data: Response) => {
      return data;
    }));
  }

}

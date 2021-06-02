import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private endpoint: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  sendEmail(data:object) {
    return this.http.post(`${this.endpoint}/sendemail`, data);
  }
}

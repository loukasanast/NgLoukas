import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  was: string;
  name: string;
  company: string;
  email: string;
  tele: string;
  msg: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept': '*/*'
    }),
    responseType: 'text'
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm(){
    let input = 'name=' + this.name + '&email=' + this.email + '&company=' + this.company + '&tele=' + this.tele + '&was=' + this.was + '&msg=' + this.msg;
    document.querySelector('.btn').textContent = 'Lädt...';

    this.http.post('mail.cshtml', input, { ...this.httpOptions, responseType: 'text' }).pipe(
        retry(1),
        catchError((this.handleError))
      ).subscribe((data) => {
      document.querySelector('.btn').textContent = 'Senden';
      document.querySelector('.confirm').classList.toggle('confirm-anim');
      setTimeout(() => document.querySelector('.confirm').classList.toggle('confirm-anim'), 7500);
    });
  }

  handleError(error) {
    document.querySelector('.btn').textContent = 'Senden';
    window.alert('An error occurred.');
    return throwError('An error occurred.');
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Award } from '../interfaces/award';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  awards: Award[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./assets/data.json').subscribe((data: Award[]) => this.awards = data);
  }

  appear(num){
    (document.querySelector('.proj' + num) as HTMLElement).style.display = 'block';
  }

  disappear(num){
    (document.querySelector('.proj' + num) as HTMLElement).style.display = 'none';
  }

}

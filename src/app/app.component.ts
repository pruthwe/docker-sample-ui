import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'docker-sample-ui';
  data?: string;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:3000',{responseType: 'text'}).subscribe((val) => {
      console.log(val);
      this.data=val;
    })
  }
}

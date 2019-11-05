import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list_array: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    try {
      this.http.get('http://jsonplaceholder.typicode.com/users').subscribe((response) => {
        this.list_array = response;
        console.log('Users Api ',this.list_array);
      });
    }catch (err) {
      console.log('Lo sentimos hay problemas de conexión', err);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list_array: any;
  items: Array<any>;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    /*try {
      this.http.get('http://apiservicepruebas.portalclientes.finesa.com.co/api/v1/aseguradoras').subscribe((response) => {
        this.list_array = response;
        this.items = this.list_array.data.aseguradoras;
        console.log(this.items);
      });
    }catch (err) {
      console.log('Lo sentimos hay problemas de conexión', err);
    }*/
    try {
      this.http.get('http://jsonplaceholder.typicode.com/users').subscribe((response) => {
        this.list_array = response;
        console.log(this.list_array);
      });
    }catch (err) {
      console.log('Lo sentimos hay problemas de conexión', err);
    }

  }

}

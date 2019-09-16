import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  authors = [];
  constructor(private _httpService: HttpService){
    this.getAllAuthors();
  }
  ngOnInit() {
    return;
  }
  getAllAuthors() {
    const observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log('Authors:', data);
      this.authors = data['authors'];
    });
  }
}

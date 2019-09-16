import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: [];
  constructor(private _httpService: HttpService) {
    this.getAllAuthors();
  }

  ngOnInit() {
  }
  getAllAuthors() {
    const observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log('Authors:', data);
      this.authors = data['authors'];
    });
  }
  onClickDelete(id) {
    const observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      this.getAllAuthors();
      console.log(data);
    });
  }

}

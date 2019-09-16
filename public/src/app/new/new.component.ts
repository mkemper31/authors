import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newAuthor: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newAuthor = { name: '' };
  }
  onSubmit() {
    const observable = this._httpService.createAuthor(this.newAuthor);
    observable.subscribe(data => {
      console.log('new author:', data);
    });
    this.newAuthor = { name: '' };
  }

}

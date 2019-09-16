import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editingAuthor: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.editingAuthor = { name: '' };
    this._route.params.subscribe((params: Params) => {
        console.log(params['id']);
        let id = params['id'];
        this.findAuthor(id);
    });
  }
  findAuthor(id) {
    const observable = this._httpService.getAuthor(id);
    observable.subscribe(data => {
      this.editingAuthor = data['author'];
    });
  }
  onSubmit() {
    const observable = this._httpService.updateAuthor(this.editingAuthor);
    observable.subscribe(data => {
      console.log('new author:', data);
    });
  }
}

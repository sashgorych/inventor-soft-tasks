import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {ItemOptionService} from './item-option.service';
@Component({
  selector: 'app-item-option',
  templateUrl: './item-option.component.html',
  styleUrls: ['./item-option.component.scss']
})
export class ItemOptionComponent implements OnInit {
  public users = [];
  public  us = '';
  public userId;
  constructor(private _ItemOptionService: ItemOptionService, private router: Router) {
  }

  ngOnInit() {
    this._ItemOptionService.getUser().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }
  onClick(user) {
    this.router.navigate(['/users', user.id, user]);
  }
  searchUser(id) {
    let a;
    for (a in this.users) {
        if (String(this.users[a].id) === String(id)) {
          return this.users[a];
        }
    }
  }
  draw(s) {}
}

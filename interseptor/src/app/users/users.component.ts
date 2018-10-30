
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsersService} from './users.service';
import {User} from '../models/user.model';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

  @Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef;
  public users: Array<User>;
    public user: User;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((users: Array<User>) => {
      this.users = users;
    });
    fromEvent(this.inputName.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.usersService.getUserByUsername(this.inputName.nativeElement.value).subscribe(user => {
          this.user = user[0];
        });
      });
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.scss']
})
export class OneUserComponent implements OnInit {
  public userId;
  public userSrcImg;
  public userLogin;
  public repos_url;
  public userType;
  constructor (private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.route.paramMap.subscribe((params: ParamMap) => {
     let id =parseInt(params.get('id'));
     let repos_url = params.get('repos_url');
     let userSrcImg  = params.get('avatar_url');
     let userLogin  = params.get('login');
     let userType  = params.get('type');
     this.userId = id;
     this.repos_url = repos_url;
     this.userSrcImg = userSrcImg;
     this.userLogin = userLogin;
     this.userType = userType;
   });
  }

}

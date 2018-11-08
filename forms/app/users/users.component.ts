import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  form: FormGroup;
  result: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let count = parseInt(params.get('count'));
      console.log(count)
      this.generateForm(count);
    });
  }

  buildItem() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/^[+]?\d{10,12}$/))])
    });
  }

  submit() {
    this.result = JSON.stringify(this.form.value, null, '\t');
    this.form.reset();
   console.log(this.result);
   alert('result in console');
    this.result = '';
    this.router.navigate(['/main']);
  }

  generateForm(number: number = 1) {
    const items = [];
    for (let i = 0; i < number; i++) {
      items.push(this.buildItem());
    }
    this.form = this.fb.group({
      items: this.fb.array(items)
    });
  }

}

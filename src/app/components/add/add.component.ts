import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addUser } from '../../ngrx/userSlice';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class addComponent implements OnInit {
  userName: string="";
  name: string="";
  password:string="";

  constructor(private myRoute: Router, private store: Store) {}
  ngOnInit() {}

  handleAdd() {
    this.store.dispatch(
      addUser({
        id: new Date().getTime().toString(),
        name: this.name,
        username: this.userName
      })
    );
    this.myRoute.navigateByUrl('/');
  }
}

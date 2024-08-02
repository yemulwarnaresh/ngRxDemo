import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUserData, updateUser } from '../../ngrx/userSlice';
import { Subscription } from 'rxjs';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class updateComponent implements OnInit {
  userName: string;
  name: string;
  userId: any;
  existedID: any;
  usersDatas: any;
  subscription: Subscription;

  constructor(
    private myRoute: Router,
    private actRoute: ActivatedRoute,
    private store: Store
  ) {}
  ngOnInit() {
    this.userId = this.actRoute.snapshot.paramMap.get('id');
    this.store.select(getUserData).subscribe((data) => {
      this.usersDatas = data;
    });
    this.existedID = this.usersDatas.filter(
      (item: any) => item.id === this.userId
    );
    this.name = this.existedID[0].name;
    this.userName = this.existedID[0].username;
  }

  // ngOnDestroy() {
  //   // Unsubscribe when the component is destroyed
  //   this.subscription.unsubscribe();
  // }

  handleUpdate() {
    this.store.dispatch(
      updateUser({
        id: this.userId,
        name: this.name,
        username: this.userName,
      })
    );
    this.myRoute.navigateByUrl('/');
  }
}

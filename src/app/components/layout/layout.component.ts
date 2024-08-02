import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUserData, deleteUser, getInitialData } from '../../ngrx/userSlice';
import { UsersData } from '../../data/dataList';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class layoutComponent implements OnInit {
  usersDatas$ = this.store.select(getUserData);

  constructor(private store: Store) {}
  ngOnInit() {
    //this.getUsers();
    
  }


getUsers(){
    this.store.dispatch(getInitialData({usersDatas:UsersData}));
}

  handleDelete(param: string) {
    this.store.dispatch(deleteUser({ id: param }));
  }
}

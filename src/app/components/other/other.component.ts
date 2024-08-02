import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUserData, deleteUser } from '../../ngrx/userSlice';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {

  usersDatas$ = this.store.select(getUserData);

  constructor(private store: Store) {
    
  }
  
  ngOnInit() {}

  handleDelete(param: string) {
    this.store.dispatch(deleteUser({ id: param }));
  }

}

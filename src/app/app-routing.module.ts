import { NgModule } from '@angular/core'; //  Testing
import { RouterModule, Routes } from '@angular/router';
import { addComponent } from './components/add/add.component';
import { layoutComponent } from './components/layout/layout.component'; 
import { updateComponent } from './components/update/update.component'; 
import { OtherComponent } from './components/other/other.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home-layout', pathMatch: 'full' },
  { path: '', component: layoutComponent },
  { path: 'add', component: addComponent },
  { path: 'update/:id', component: updateComponent },
  { path : 'other', component:OtherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { addComponent } from './components/add/add.component';
import { updateComponent } from './components/update/update.component';
import { layoutComponent } from './components/layout/layout.component';

import { reducers } from './ngrx/store';
import { StoreModule } from '@ngrx/store';
import { OtherComponent } from './components/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    addComponent,
    updateComponent,
    layoutComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

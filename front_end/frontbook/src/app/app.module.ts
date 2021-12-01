import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ViewDeleteComponent } from './book/view-delete/view-delete.component';
import { AddUpdateComponent } from './book/add-update/add-update.component';
import { MiddleService } from './middle.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ViewDeleteComponent,
    AddUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MiddleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

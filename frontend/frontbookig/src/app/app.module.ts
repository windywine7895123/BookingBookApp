import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchBookComponent } from './search-book/search-book.component';
import { AdminComponent } from './admin/admin.component';
import { BookingStoreComponent } from './booking-store/booking-store.component';
import { MenubarComponent } from './menubar/menubar.component';

import {FormsModule} from '@angular/forms';

import {AutoCompleteModule} from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {MenubarModule} from 'primeng/menubar';

import {TabMenuModule} from 'primeng/tabmenu';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';

import {TableModule} from 'primeng/table';

import {ButtonModule} from 'primeng/button';
import { AddBookComponent } from './add-book/add-book.component';

import {InputTextModule} from 'primeng/inputtext';

import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    AdminComponent,
    BookingStoreComponent,
    MenubarComponent,
    BookDetailComponent,
    BookEditComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    HttpClientModule,
    FormsModule,
    MenubarModule,
    TabMenuModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

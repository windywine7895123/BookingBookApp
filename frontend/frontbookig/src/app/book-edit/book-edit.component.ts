import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  @Input() book?: any;

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id)
    .subscribe(book => this.book = book);
  }

  goBack(): void {
    if(confirm('Are you sure?')){
      this.location.back();
    }
  }
  
  save(): void {
    if (this.book) {
      this.bookService.updateBook(this.book)
        .subscribe(() => this.goBack());
    }
  }

  constructor( 
    private bookService:BookService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getBook();
  } 

}

import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  books: any[] = [];

  constructor( private bookService:BookService ) { }

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(books => this.books = books);
  }

  delete(book: any): void {
    if(confirm('Are you sure to delete?')){
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book.id).subscribe(res => {
      alert(res.toString());
    });
  }
  }

 
  ngOnInit(): void {

    this.getBooks();

  }

}

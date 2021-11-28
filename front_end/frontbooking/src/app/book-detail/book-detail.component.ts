import { Component, OnInit ,Input} from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from '../book.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  books: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }
  
  getBooks(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBooks()
      .subscribe(data => this.books = data);
  }
  
}
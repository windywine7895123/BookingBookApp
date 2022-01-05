import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';

import { Book } from '../book';




@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @Input() book: any;
  id: string | undefined;
  bookName: string | undefined;
  bookAuthor: string | undefined;
  bookPub_Date: string | undefined;
  bookCategory: string | undefined;
  bookImage: string | undefined;
  bookDescribe: string | undefined;



  constructor( 
    private bookService:BookService,
    ) { }

  ngOnInit(): void {

  }

  AddBook(): void {
    
    var val = {
      name: this.bookName,
      author: this.bookAuthor,
      pub_date: this.bookPub_Date,
      category: this.bookCategory,
      image: this.bookImage,
      describe: this.bookDescribe,
    }
    
    this.bookService.addBook(val).subscribe(res => {
      alert(res.toString());
    });
  }



}

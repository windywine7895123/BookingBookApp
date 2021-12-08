import { Component, OnInit, Input } from '@angular/core';
import { MiddleService } from 'src/app/middle.service';
@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {

  constructor(private service: MiddleService) { }
  @Input() book: any;
  id: string | undefined;
  bookName: string | undefined;
  bookAuthor: string | undefined;
  bookPubdate:string | undefined;
  bookPic: string | undefined;
  bookCategory: string | undefined;

  ngOnInit(): void {
    this.id = this.book.id;
    this.bookName = this.book.bookName;
    this.bookAuthor = this.book.bookAuthor;
    this.bookPubdate = this.book.bookPubdate;
    this.bookPic = this.book.bookPic;
    this.bookCategory = this.book.bookCategory;
  }
  addBook() {
    var val = {
      bookname: this.bookName,
      author: this.bookAuthor,
      pubdate:this.bookPubdate,
      picture: this.bookPic,
      category: this.bookCategory,
    }
    this.service.addBook(val).subscribe(res => {
      alert(res.toString());
    });
  }
  updateBook() {
    var val = {
      id: this.id,
      bookname: this.bookName,
      author: this.bookAuthor,
      pubdate:this.bookPubdate,
      picture: this.bookPic,
      category: this.bookCategory,
    }
    this.service.updateBook(val).subscribe(res => {
      alert(res.toString());
    });
  }
}


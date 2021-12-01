import { Component, OnInit } from '@angular/core';
import { MiddleService } from 'src/app/middle.service';

@Component({
  selector: 'app-view-delete',
  templateUrl: './view-delete.component.html',
  styleUrls: ['./view-delete.component.css']
})
export class ViewDeleteComponent implements OnInit {

  constructor(private service: MiddleService) { }

  BookList:any=[]
  ModalTitle: string | undefined;
  ActivateAddEditBook:boolean = false;
  book:any;

  ngOnInit(): void {
    this.refreshBookList();
  }

  addBook(){
    this.book={
      id:0,
      Bookname:""
    }
    this.ModalTitle="Add Book";
    this.ActivateAddEditBook=true;
  }

  editBook(item: any){
    this.book=item;
    this.ModalTitle="Edit Book"
    this.ActivateAddEditBook=true;
  }

  closeBooklist(){
    this.ActivateAddEditBook=false;
    this.refreshBookList;
  }

  refreshBookList(){
    this .service.getBooklist().subscribe(data =>{
      this.BookList=data;
    });
  }

  deleteBook(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteBook(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshBookList();
      })
    }
  }

}

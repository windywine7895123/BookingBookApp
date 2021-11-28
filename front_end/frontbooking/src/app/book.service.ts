import { Injectable } from '@angular/core';
// import { Book } from './book';
// import { BOOKS } from './mock-books';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private booksUrl = 'http://localhost:8000/books';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.booksUrl)
  }

  // getBook(id: number): Observable<Book> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   // const book = BOOKS.find(h => h.id === id)!;
  //   this.messageService.add(`BookService: fetched book id=${id}`);
  //   return of(book);
  // }

  constructor(private messageService: MessageService,
              private http: HttpClient,
              ) { };
          
  private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
  }
}

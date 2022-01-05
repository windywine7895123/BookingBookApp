import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'http://localhost:8000/book/';
  private searchbooksUrl = 'http://localhost:8000/booking/';

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.booksUrl);
  }

  getBook(id: number): Observable<any> {
    const url = `${this.searchbooksUrl}${id}/`;
    return this.http.get<any>(url);
  }

 
  updateBook(val: any): Observable<any> {
    return this.http.put(this.booksUrl,val);
  }


  addBook(val: any): Observable<any> {
    return this.http.post(this.booksUrl,val);
  }

  deleteBook(val: any): Observable<any> {
    return this.http.delete(this.booksUrl + val);
  }

  searchBooks(term: string): Observable<any[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<any[]>(`${this.searchbooksUrl}search/?_name=${term}`);
  }
  
  constructor( private http: HttpClient ) { }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MiddleService {
    readonly BookUrl = "http://localhost:8000/book/"

  constructor(private http:HttpClient) { }

  getBooklist():Observable<any[]>{
    return this.http.get<any[]>(this.BookUrl);
  
  }
  addBook(val:any){
    return this.http.post(this.BookUrl,val);
  }

  updateBook(val:any){
    return this.http.put(this.BookUrl,val);
  }

  deleteBook(val:any){
    return this.http.delete(this.BookUrl+val);
  }

  getBooknamelist():Observable<any[]>{
    return this.http.get<any[]>(this.BookUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MiddleService {
    readonly BookUrl = "http://localhost:8000"

  constructor(private http:HttpClient) { }

  getBooklist():Observable<any[]>{
    return this.http.get<any[]>(this.BookUrl+"/book/");
  
  }
  addBook(val:any){
    return this.http.post(this.BookUrl + '/book/',val);
  }

  updateBook(val:any){
    return this.http.put(this.BookUrl + '/book/',val);
  }

  deleteBook(val:any){
    return this.http.delete(this.BookUrl + '/book/'+val);
  }

  getBooknamelist():Observable<any[]>{
    return this.http.get<any[]>(this.BookUrl+"/book/");
  }
}

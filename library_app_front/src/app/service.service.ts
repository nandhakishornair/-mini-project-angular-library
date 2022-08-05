import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  item = {
    bookId:'',
    title: '',
    author: '',
    image: '',
    about: '' 
  };

  constructor(private http:HttpClient) { }
  booksdata(){
    return this.http.get("books");
  }
  newBook(item:any)
  {   
    return this.http.post("books/insert",{"books":item})
    .subscribe(data =>{console.log(data)})
  }
  getbook(id:any){
    return this.http.get("books/"+id);
  }
  editbook(book:any)
  {
    console.log('client update')
    return this.http.put("books/update",book)
    .subscribe(data =>{console.log(data)})
  }
  deletebook(id:any)
  {
    // return this.http.delete("http://localhost:3000/books/remove/"+id)
    return this.http.delete("books/remove/"+id) 

  }
}

import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
    books = [{
      bookId:'',
      title: '',
      author: '',
      image: '',
      about: '' 
    }];
       

      constructor(private Service: ServiceService ,private router:Router,public _auth:AuthService) { }

      ngOnInit(): void{
        this.Service.booksdata().subscribe((data)=>{
          this.books=JSON.parse(JSON.stringify(data));
          console.log(data)
      })
      }


      editbook(book:any)
      {
        localStorage.setItem("editbookId", book._id.toString());
        this.router.navigate(['update']);
    
      }
      deletebook(book:any){
        this.Service.deletebook(book._id)
        .subscribe((data)=>{
          this.books= this.books.filter(p => p!== book);
        })
      }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  books = {
    bookId:'',
    title: '',
    author: '',
    image: '',
    about: '' 
    };
  constructor(private Service: ServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  AddBook()
  {    
    this.Service.newBook(this.books);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}

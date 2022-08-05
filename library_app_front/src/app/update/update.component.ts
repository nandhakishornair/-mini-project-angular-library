import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  books = {
    bookId:'',
    title: '',
    author: '',
    image: '',
    about: '' 
  };

  constructor(private router:Router,private Service:ServiceService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editbookId");
    this.Service.getbook(bookId).subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
      // console.log('decrpted data ', localStorage['getData']('editbookId'));
  })
  }
  editbook()
  {    
    this.Service.editbook(this.books);   
    alert("Success");
    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/component/service/BookService';
import { Book } from 'src/app/component/model/Book';


@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css'],
  providers: [BookService]
})
export class ViewbookComponent implements OnInit {
  
  books : Book[] = [];
  constructor(private bService:BookService) { }

  ngOnInit(): void {
    this.findAllBooks();
  }
  
  findAllBooks(){
    this.bService.findAllBooks().subscribe({
      next: (res:any)=>{
        console.log(res)
        this.books = res;
        console.log(this.books);
      },
      error: (err)=>{
        console.log("Something bad happened")
        console.log(err)
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/component/service/BookService';
import { Book } from 'src/app/component/model/Book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
  providers: [BookService]
})
export class AddbookComponent implements OnInit {
  message : string ="";
  constructor(private bService:BookService) { }

  ngOnInit(): void {
  } 
  counter:number = 10;

  addBook(bname:string, category:string, price:string, author:string, publisher:string,pdate:string){
    let m:Book = new Book(++this.counter, bname, category, +price,author,false,0,publisher,new Date(pdate));
    this.bService.addBook(m).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.message = "Added the book successfully";
      },
      error: (err)=>{
        console.log("Something bad happened while saving movie")
        console.log(err)
        this.message = err;
      }
    })
  }
}

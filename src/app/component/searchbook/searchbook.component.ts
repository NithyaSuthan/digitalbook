import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/component/service/BookService';
import { Book } from 'src/app/component/model/Book';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css'],
  providers: [BookService]
})
export class SearchbookComponent implements OnInit {

  books : Book[] = [];
  constructor(private bService:BookService) { }

  ngOnInit(): void {
  }
  
  searchBook(property : string,value : string){
    this.bService.searchBook(property, value).subscribe({
      next: (res:any)=>{
        console.log(res)
        this.books = [];
        for(let i=0;i<res.length;i++){
          this.books.push(res[i]);
        }
        console.log(this.books);
      },
      error: (err)=>{
        console.log("Something bad happened")
        console.log(err)
      }
    })
  }
}

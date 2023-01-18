import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/component/service/BookService';

@Component({
  selector: 'app-blockbook',
  templateUrl: './blockbook.component.html',
  styleUrls: ['./blockbook.component.css'],
  providers: [BookService]
})
export class BlockbookComponent implements OnInit {
  message : string ="";
  constructor(private bService:BookService) { }

  ngOnInit(): void {
  }
  
  blockBook(bookId : string){
    this.bService.blockBook(bookId).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.message = "Blocked the book successfully";
      },
      error: (err)=>{
        console.log("Something bad happened")
        console.log(err);
        this.message=err;
      }
    })
  }
}

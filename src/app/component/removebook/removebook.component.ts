import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/component/service/BookService';

@Component({
  selector: 'app-removebook',
  templateUrl: './removebook.component.html',
  styleUrls: ['./removebook.component.css'],
  providers: [BookService]
})
export class RemovebookComponent implements OnInit {
  message : string ="";
  constructor(private bService:BookService) { }

  ngOnInit(): void {
  }

  removeBook(bookId : string){
    this.bService.removeBook(bookId).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.message = "Removed the book successfully";
      },
      error: (err)=>{
        console.log("Something bad happened")
        console.log(err);
        this.message =err;
      }
    })
  }
}

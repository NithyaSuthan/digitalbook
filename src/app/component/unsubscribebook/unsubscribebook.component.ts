import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/component/service/BookService';

@Component({
  selector: 'app-unsubscribebook',
  templateUrl: './unsubscribebook.component.html',
  styleUrls: ['./unsubscribebook.component.css'],
  providers: [BookService]
})
export class UnsubscribebookComponent implements OnInit {
  message : string ="";
  user : string ="";
  constructor(private bService:BookService) { }

  ngOnInit(): void {
  }

  unsubscribe(bookId : string){
    this.user = localStorage.getItem("username")||"";
    this.bService.unsubscribe(bookId,this.user).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.message="Unsubscribed Book";
      },
      error: (err)=>{
        console.log("Something bad happened")
        console.log(err)
        this.message="Not able to unsubscribe book";
      }
    })
  }

}

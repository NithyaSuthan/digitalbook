import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/component/service/BookService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subscribebook',
  templateUrl: './subscribebook.component.html',
  styleUrls: ['./subscribebook.component.css'],
  providers: [BookService]
})
export class SubscribebookComponent implements OnInit {
  message : string ="";
  user : string ="";
  constructor(private bService:BookService) { 
    
  }

  ngOnInit(): void {
  }
  
  subscribe(bookId : string){
    this.user = localStorage.getItem("username")||"";
    console.log(this.user);
    this.bService.subscribe(bookId,this.user).subscribe({
      next: (res:any)=>{
        console.log(res)
        this.message = "Subscribed, Your Subscription id is "+res;
      },
      error: (err)=>{
        console.log("Something bad happened")
        console.log(err)
        this.message = "Error in subscription..";
      }
    })
  }
}

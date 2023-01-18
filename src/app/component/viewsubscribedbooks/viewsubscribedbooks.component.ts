import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/component/service/BookService';
import { Book } from 'src/app/component/model/Book';

@Component({
  selector: 'app-viewsubscribedbooks',
  templateUrl: './viewsubscribedbooks.component.html',
  styleUrls: ['./viewsubscribedbooks.component.css'],
  providers: [BookService]
})
export class ViewsubscribedbooksComponent implements OnInit {

  books : Book[] = [];
  newbooks : Book[] = [];
  bookid : string = "";
  user : string = "";
  result : string[] = [];
  constructor(private bService:BookService) { }
  indexValue : number = 0;
  ngOnInit(): void {
    this.findAllBooks();
    this.user = localStorage.getItem("username")||"";
    this.view(this.user);
    
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

  view(user : string){
    this.bService.view(user).subscribe({
      next: (res:any)=>{
        console.log("BookId: "+res);
        this.bookid = res;
        this.indexValue = this.bookid.toString().indexOf(",");
        if(this.indexValue>0){
          this.result = this.bookid.split(",");
        }else{
          this.result[0] = this.bookid;
        }
        this.newbooks = [];
        for(let b of this.books){
           for(let i of this.result){
              if(+i == b.bookId){
                this.newbooks.push(b);
              }
           }
        }
      },
      error: (err)=>{
        console.log("Something bad happened")
        console.log(err)
      }
    })
  }

}

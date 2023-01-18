import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/component/service/BookService';


@Component({
  selector: 'app-updateprice',
  templateUrl: './updateprice.component.html',
  styleUrls: ['./updateprice.component.css'],
  providers: [BookService]
})
export class UpdatepriceComponent implements OnInit {
  message : string ="";
  constructor(private bService:BookService) { }

  ngOnInit(): void {
  }
  
  updatePrice(bookId : string, price : string){
    this.bService.updatePrice(bookId,price).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.message = "Updated the price successfully";
      },
      error: (err)=>{
        console.log("Something bad happened")
        console.log(err);
        this.message = err;
      }
    })
  }
}

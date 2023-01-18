import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/component/model/Book';

@Injectable({
    providedIn: 'root'
})
export class BookService{
    private viewhost:string = "http://localhost:8100/book/view";
    private viewbyidhost:string = "http://localhost:8100/book/viewbyproperty?property=";
    private blockbookhost:string = "http://localhost:8100/book/blockbook?id=";
    private removebookhost:string = "http://localhost:8100/book/removebook?id=";
    private updatepricehost:string = "http://localhost:8100/book/updateprice?id=";
    private addbookhost:string = "http://localhost:8100/book/addbook";
    private subscribebookhost:string = "http://localhost:8400/guest?username=";
    private unsubscribebookhost:string = "http://localhost:8400/unsubscribe?username=";
    private viewunsubscribebookhost:string = "http://localhost:8400/viewsubscribedbooks?username=";
    private addhost:string ="http://localhost:8400/signup?username=";
    constructor(private httpClient:HttpClient) { }

    findAllBooks(){
    return this.httpClient.get(this.viewhost);
    }

    searchBook(property : string,value : string){
        //this.viewbyidhost+=bookId;
        return this.httpClient.get(this.viewbyidhost+property+"&value="+value);
    }

    blockBook(bookId : string){
        //this.blockbookhost+=bookId;
        return this.httpClient.put(this.blockbookhost+=bookId,bookId);
    }

    removeBook(bookId : string){
        //this.removebookhost+=bookId;
        return this.httpClient.delete(this.removebookhost+=bookId);
    }

    updatePrice(bookId : string, price : string){
      //  this.updatepricehost+=bookId+"&price="+price;
        return this.httpClient.put(this.updatepricehost+=bookId+"&price="+price,bookId);
    }

    addBook(b:Book){
        return this.httpClient.post(this.addbookhost, b);
      }

      subscribe(bookId : string, username : string){
        //this.subscribebookhost+=username+"&bookId="+bookId;
        return this.httpClient.get(this.subscribebookhost+username+"&bookId="+bookId);
    }

    unsubscribe(bookId : string, username : string){
        //this.unsubscribebookhost+=username+"&bookId="+bookId;
        return this.httpClient.get(this.unsubscribebookhost+username+"&bookId="+bookId);
    }

    view(username : string){
        //this.unsubscribebookhost+=username+"&bookId="+bookId;
        return this.httpClient.get(this.viewunsubscribebookhost+username, {responseType: 'text'});
    }

    signup(username : string, password : string, role : string){
        //this.unsubscribebookhost+=username+"&bookId="+bookId;
        return this.httpClient.put(this.addhost+username+"&password="+password+"&role="+role,username);
    }
}
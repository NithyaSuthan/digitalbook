import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/component/service/BookService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [BookService]
})
export class SignupComponent implements OnInit {
  message : string ="";
  constructor(private bService:BookService) { }

  ngOnInit(): void {
  }
  
  signup(username : string, password: string, role : string){
    this.bService.signup(username,password,role).subscribe({
      next: (res:any)=>{
        console.log(res)
        this.message = "Your account has been created";
      },
      error: (err)=>{
        console.log("Something bad happened")
        console.log(err)
        this.message = "Please check the inputs";
      }
    })
  }

  
}

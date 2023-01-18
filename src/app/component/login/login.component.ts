import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { UserService } from './UserService';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  token : string = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJkYXRlIjoiMjAyMy0wMS0xNlQxMDo1Mjo0MS4wNjciLCJzdWIiOiJHdWVzdFVzZXIiLCJyb2xlIjpbeyJhdXRob3JpdHkiOiJHVUVTVCJ9XSwibWVzc2FnZSI6InNvbWUgb3RoZXIgbWVzc2FnZSIsImV4cCI6MTY3Mzg2NDU2MSwiaWF0IjoxNjczODQ2NTYxfQ.bk37JBTWlPkWCrLe13_OKAwr30vQ3maCJZOXOxKQsjsaZnFkYXiZ5I9hjF-APlM6lUxpSzcpZSSjJ8qOSHArYA";
  result : string[] = [];
  role : string="";
  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  
  authenticate(username : string, password: string){
    this.userService.authenticate(username, password,this.token).subscribe({
      next: (res:any)=>{
        console.log(res);
        //this.token = res;
        this.result = res.split("  ");
        //console.log(this.result);
        this.token = "Bearer "+this.result[0];
        this.role = this.result[1].substr(1,this.result[1].length-2);
        console.log(this.token);
        console.log(this.role);
        localStorage.setItem("username",username);
       
        if(this.role == "GUEST"){
          this. router. navigate(['/guest']);
        }
        if(this.role == "READER"){
          this. router. navigate(['/reader']);
        }
        if(this.role == "AUTHOR"){
          this. router. navigate(['/author']);
        }
      },
      error: (err)=>{
        console.log("Something bad happened")
        console.log(err)
      }
    })
  }

}

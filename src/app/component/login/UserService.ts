import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    private host:string = "http://localhost:8400/authenticate?username=";
    //token : string = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJkYXRlIjoiMjAyMy0wMS0xMlQxMTozMDozNi44NzYiLCJzdWIiOiJ1c2VyMiIsInJvbGUiOlt7ImF1dGhvcml0eSI6IkdVRVNUIn1dLCJtZXNzYWdlIjoic29tZSBvdGhlciBtZXNzYWdlIiwiZXhwIjoxNjczNTAzNTM2LCJpYXQiOjE2NzM1MDMyMzZ9.wT8GGxIWChL8eHt1LT1aOF-NsbDHcWNWRdC2Fs7p1T279IPJ5Q6WeowqzFT_XjiO4Dj8EyEXXHEXOA0sxP6viw";
    constructor(private httpClient:HttpClient) { }
    
    authenticate(username : string, password : string, token : string){
    this.host+=username+'&password='+password;
    return this.httpClient.post(this.host,{username, password},{
      headers: new HttpHeaders().set('Authorization', token),responseType: 'text'});
  }

}
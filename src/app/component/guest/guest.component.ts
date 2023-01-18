import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
   
  }
  
  //username : string = this.router.getCurrentNavigation.arguments.state.example;
  
  viewBooks(){
    this. router. navigate(['/viewbook']);
  }
  searchBook(){
    this. router. navigate(['/searchbook']);
  }
  signup(){
    this. router. navigate(['/signup']);
  }
}

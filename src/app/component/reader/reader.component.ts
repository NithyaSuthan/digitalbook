import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  
  constructor(private router: Router) { 
    }
  
  ngOnInit(): void {
  }

  subscribe(){
    this. router. navigate(['/subscribe']);
  }
  unsubscribe(){
    this. router. navigate(['/unsubscribe']);
  }
  
  view(){
    this. router. navigate(['/view']);
  }
}

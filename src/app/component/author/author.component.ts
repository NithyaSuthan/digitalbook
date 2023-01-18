import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  viewBooks(){
    this. router. navigate(['/viewbook']);
  }
  searchBook(){
    this. router. navigate(['/searchbook']);
  }
  blockBook(){
    this. router. navigate(['/blockbook']);
  }
  addBook(){
    this. router. navigate(['/addbook']);
  }
  removeBook(){
    this. router. navigate(['/removebook']);
  }
  updatePrice(){
    this. router. navigate(['/updateprice']);
  }
}

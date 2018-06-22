import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    'http://via.placeholder.com/900x600',
    'http://via.placeholder.com/900x600',
    'http://via.placeholder.com/900x600'
  ];

  constructor() { }
  
  ngOnInit() {
  }

  
}

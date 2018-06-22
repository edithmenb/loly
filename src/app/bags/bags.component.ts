import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bags= [
    {
      img: "bunny.jpg",
      name: "BUNNY",
      price: 1099
    },
    {
      img: "roberta.jpg",
      name: "ROBERTA",
      price: 1199
    },
    {
      img: "james.jpg",
      name: "JAMES",
      price: 600
    },
    {
      img: "cordelia.jpg",
      name: "CORDELIA",
      price: 1199
    },
    {
      img: "camel.jpg",
      name: "CAMEL",
      price: 1099
    }
  ];
}

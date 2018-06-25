import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BagsService {

  constructor() { }

  getBags(){
    return this.bags;
  }

  bags= [
    {
      id: 1,
      img: "bunny.jpg",
      name: "BUNNY",
      price: 1099
    },
    {
      id: 2,
      img: "roberta.jpg",
      name: "ROBERTA",
      price: 1199
    },
    {
      id: 3,      
      img: "james.jpg",
      name: "JAMES",
      price: 600
    },
    {
      id: 4,
      img: "cordelia.jpg",
      name: "CORDELIA",
      price: 1199
    },
    {
      id: 5,
      img: "camel.jpg",
      name: "CAMEL",
      price: 1099
    }
  ];
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor() { }

  getShoes(){
    return this.SHOES;
  }
  
  SHOES = [
    {
      id: 1,
      img: "Sara.jpg",
      img2:"sara2.jpg",
      img3:"sara3.jpg",
      name: "SARA",
      price: 749.00
    },
    {
      id: 2,
      img: "dayana.jpg",
      img2:"dayana2.jpg",
      img3:"dayana3.jpg",
      name: "DAYANA",
      price: 719.00
    },
    {
      id: 3,
      img: "naomi.jpg",
      name: "NAOMI",
      img2:"naomi2.jpg",
      img3:"naomi3.jpg",
      price: 749.00
    },
    {
      id: 4,
      img: "juliana.jpg",
      name: "JULIANA",
      img2:"juliana2.jpg",
      img3:"juliana3.jpg",
      price: 749.00
    },
    {
      id: 5,
      img: "fabiana.jpg",
      name: "FABIANA",
      img2:"fabiana2.jpg",
      img23:"fabiana3.jpg",
      price: 749.00
    }
  ];
}
